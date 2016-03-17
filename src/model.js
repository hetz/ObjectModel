function Model(def){
	if(!isLeaf(def)) return Model.Object(def);

	var model = function(obj) {
		model.validate(obj);
		return obj;
	};

	setConstructor(model, Model);
	model.definition = def;
	model.assertions = [];
	return model;
}

setProto(Model, Function.prototype);

Model.prototype.toString = function(stack){
	return parseDefinition(this.definition).map(function(d){ return toString(d, stack); }).join(" or ");
};

Model.prototype.validate = function(obj, errorCollector){
	return this.validator(obj, errorCollector || this.errorCollector, []);
};

Model.prototype.test = function(obj){
	return test.call(this, obj, []);
};

Model.prototype.extend = function(){
	var def, proto,
		assertions = cloneArray(this.assertions),
		args = cloneArray(arguments);

	if(Model.instanceOf(this, Model.Object)){
		def = {};
		proto = {};
		merge(def, this.definition);
		merge(proto, this.prototype);
		args.forEach(function(arg){
			if(Model.instanceOf(arg, Model)){
				merge(def, arg.definition, true);
				merge(proto, arg.prototype, true);
			} else {
				merge(def, arg, true);
			}
		})
	} else {
		def = args.reduce(function(def, ext){ return def.concat(parseDefinition(ext)); }, parseDefinition(this.definition))
			      .filter(function(value, index, self) { return self.indexOf(value) === index; }); // remove duplicates
	}

	args.forEach(function(arg){
		if(Model.instanceOf(arg, Model)){
			assertions = assertions.concat(arg.assertions);
		}
	});

	var submodel = new this.constructor(def);
	setProto(submodel, this.prototype);
	merge(submodel.prototype, proto);
	submodel.assertions = assertions;
	return submodel;
};

Model.prototype.assert = function(){
	this.assertions = this.assertions.concat(cloneArray(arguments).filter(isFunction));
	return this;
};

Model.prototype.errorCollector = function(err){
	var message = err.message ||
		("expecting " + (err.path ? err.path + " to be " : "")
		+ err.expected.map(function(d){ return toString(d); }).join(" or ")
		+ ", got " + (err.received != null ? bettertypeof(err.received) + " " : "")
		+ toString(err.received))
	throw new TypeError(message);
};

Model.instanceOf = function(obj, Constructor){ // instanceof sham for IE<9
	return canSetProto ? obj instanceof Constructor	: (function recursive(o, stack){
		if(o == null || stack.indexOf(o) !== -1) return false;
		var proto = Object.getPrototypeOf(o);
		stack.push(o);
		return proto === Constructor.prototype || recursive(proto, stack);
	})(obj, [])
};

Model.conventionForConstant = function(key){ return key.toUpperCase() === key };
Model.conventionForPrivate = function(key){ return key[0] === "_" };

// private methods
define(Model.prototype, "validator", function(obj, errorCollector, stack){
	checkDefinition(obj, this.definition, null, stack || [], errorCollector);
	matchAssertions(obj, this.assertions, errorCollector);
});

function isLeaf(def){
	return bettertypeof(def) != "Object";
}

function parseDefinition(def){
	if(isLeaf(def)){
		if(!isArray(def)) return [def];
		else if(def.length === 1) return def.concat(undefined);
	} else {
		Object.keys(def).forEach(function(key) {
			def[key] = parseDefinition(def[key]);
		});
	}
	return def;
}

function checkDefinition(obj, def, path, stack, errorCollector){
	if(isLeaf(def)){
		def = parseDefinition(def);
		for(var i= 0, l=def.length; i<l; i++){
			if(checkDefinitionPart(obj, def[i], stack)){ return; }
		}
		errorCollector({
			expected: def,
			received: obj,
			path: path
		});
	} else {
		Object.keys(def).forEach(function(key) {
			var val = obj != null ? obj[key] : undefined;
			checkDefinition(val, def[key], path ? path + '.' + key : key, stack.concat(val), errorCollector);
		});
	}
}

function checkDefinitionPart(obj, def, stack){
	if(obj == null){
		return obj === def;
	}
	if(Model.instanceOf(def, Model)){
		var indexFound = stack.indexOf(def);
		if(indexFound !== -1 && stack.slice(indexFound+1).indexOf(def) !== -1){
			return true; //if found twice in call stack, cycle detected, skip validation
		}
		return test.call(def, obj, stack.concat(def));
	}
	if(def instanceof RegExp){
		return def.test(obj);
	}

	return obj === def
		|| (isFunction(def) && obj instanceof def)
		|| obj.constructor === def;
}

function test(obj, stack){
	try {
		this.validator(obj, function(){
			throw new TypeError();
		}, stack);
		return true;
	}
	catch(e){
		return false;
	}
}

function matchAssertions(obj, assertions, errorCollector){
	for(var i=0, l=assertions.length; i<l ; i++ ){
		if(!assertions[i](obj)){
			errorCollector({ message: "assertion failed: "+toString(assertions[i]) });
		}
	}
}