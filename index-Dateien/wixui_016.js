((typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || []).push([[37],{

/***/ 12:
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 17:
/*!***************************************************!*\
  !*** ../node_modules/create-react-class/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(/*! react */ 0);
var factory = __webpack_require__(/*! ./factory */ 18);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 18:
/*!*****************************************************!*\
  !*** ../node_modules/create-react-class/factory.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(/*! object-assign */ 12);

var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 19);
var _invariant = __webpack_require__(/*! fbjs/lib/invariant */ 9);

if (false) { var warning; }

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {}
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {}
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {}
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {}
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) { var isMixinValid, typeofSpec; }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {}
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) { var _bind, componentName; }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {}
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {}

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {}
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {}

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {}

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ 19:
/*!***********************************************!*\
  !*** ../node_modules/fbjs/lib/emptyObject.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),

/***/ 239:
/*!*********************************************!*\
  !*** ./components/BarChart/BarChart.st.css ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })

exports.default = __webpack_require__.stylable.create(
  "root",
  "BarChart2277138400",
  {"root":"BarChart2277138400--root","rootContainer":"BarChart2277138400--rootContainer","barItem":"BarChart2277138400--barItem","barItemText":"BarChart2277138400--barItemText","barItemTitle":"BarChart2277138400--barItemTitle","color1":"#308ddd","hover1":"#3899ec","color2":"#20455e","hover2":"#275473","color3":"#577083","hover3":"#7a92a5","color4":"#61ad5a","hover4":"#60bc57","color5":"#fdb10c","hover5":"#fac249","color6":"#d6453d","hover6":"#f66","backgroundColor":"color_18"},
  "",
  1,
  /*! ./components/BarChart/BarChart.st.css */ 239
);

exports.default.$skin = {"params":{"color1":"COLOR","hover1":"COLOR","color2":"COLOR","hover2":"COLOR","color3":"COLOR","hover3":"COLOR","color4":"COLOR","hover4":"COLOR","color5":"COLOR","hover5":"COLOR","color6":"COLOR","hover6":"COLOR","backgroundColor":"COLOR_ALPHA"},"paramsDefaults":{"color1":"#308ddd","hover1":"#3899ec","color2":"#20455e","hover2":"#275473","color3":"#577083","hover3":"#7a92a5","color4":"#61ad5a","hover4":"#60bc57","color5":"#fdb10c","hover5":"#fac249","color6":"#d6453d","hover6":"#f66","backgroundColor":"color_18"}};
exports.default.$skin.$render = function render_css($id, $params, $functions) {
  return "\n" + $id + ".BarChart2277138400--root{position: relative;width: 100%;height: 100%;background: " + $params["backgroundColor"] + "}\n" + $id + ".BarChart2277138400--rootContainer{display: flex;height: 100%}\n" + $id + " .BarChart2277138400--barItem{position: relative;min-width: 10px;margin: 0 auto;padding: 0 10px;flex-grow: 0}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"0\"]{background-color: " + $params["color1"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"0\"]:hover{background-color: " + $params["hover1"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"1\"]{background-color: " + $params["color2"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"1\"]:hover{background-color: " + $params["hover2"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"2\"]{background-color: " + $params["color3"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"2\"]:hover{background-color: " + $params["hover3"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"3\"]{background-color: " + $params["color4"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"3\"]:hover{background-color: " + $params["hover4"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"4\"]{background-color: " + $params["color5"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"4\"]:hover{background-color: " + $params["hover5"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"5\"]{background-color: " + $params["color6"] + "}\n" + $id + " .BarChart2277138400--barItem[data-barchart2277138400-colorindex=\"5\"]:hover{background-color: " + $params["hover6"] + "}\n" + $id + " .BarChart2277138400--barItemText{font-size: 20px;position: absolute;top: 50%;left: 50%;max-width: 100%;transform: translate(-50%,-50%);color: #fff}\n" + $id + " .BarChart2277138400--barItemTitle{position: absolute;bottom: 0;left: 50%;overflow: hidden;max-width: 100%;margin: 0 5px;transform: translate(-50%,calc(100% + 12px));text-transform: uppercase;text-overflow: ellipsis;pointer-events: none}\n";
};

/***/ }),

/***/ 356:
/*!*****************************************!*\
  !*** ./components/BarChart/BarChart.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BarChart = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _BarChartSt = __webpack_require__(/*! ./BarChart.st.css */ 239);

var _BarChartSt2 = _interopRequireDefault(_BarChartSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var DEFAULT_DATASET = [{
  value: 2163,
  previous: 200,
  type: 'social',
  description: '37% of your traffic came from social media (up 2%)'
}, {
  value: 960,
  previous: 200,
  type: 'direct',
  description: '23% of your traffic came from typing your store\'s URL directly in a browser and from anonymous referrals'
}, {
  value: 750,
  previous: 200,
  type: 'referral',
  description: '7% of your traffic was referred by a link on another website'
}, {
  value: 500,
  previous: 200,
  type: 'organic',
  description: '2% of your traffic came from search engine results'
}, {
  value: 100,
  previous: 200,
  type: 'other',
  description: '37% of your traffic came from other sources (up 2%)'
}];
var DEFAULT_TOTAL = DEFAULT_DATASET.reduce(function (acc, curr) {
  return acc + curr.value;
}, 0);
var PERCENTAGE_PRECISION = 3;
var COLORS_LENGTH = 6;
var MIN_BAR_WIDTH = 34;

var sortArrByDesc = function sortArrByDesc(arr) {
  return [].concat(_toConsumableArray(arr)).sort(function (a, b) {
    return b.value - a.value;
  });
};

var numberFormater = new Intl.NumberFormat();

var formatNumberToPrecision = function formatNumberToPrecision() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return numberFormater.format(parseFloat(typeof value === 'number' ? value.toFixed(precision) : value));
};

var formatToPercent = function formatToPercent() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var formatedValue = typeof value === 'number' ? formatNumberToPrecision(value, 0) : value;

  return formatedValue + '%';
};

var countPercentageFromBase = function countPercentageFromBase(base, chunk, precision) {
  if (chunk === 0 || base === 0) {
    return 0;
  }

  if (precision === undefined) {
    return chunk * 100 / base;
  }

  if (precision < 0 || precision % precision) {
    throw new Error('Precision should be integer');
  }

  return Number((chunk * 100 / base).toFixed(precision));
};

var BarChart = exports.BarChart = function (_React$Component) {
  _inherits(BarChart, _React$Component);

  function BarChart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BarChart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call.apply(_ref, [this].concat(args))), _this), _this.barChartNode = null, _this.state = {
      barNodeWidth: 0
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BarChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ barNodeWidth: this.barChartNode.offsetWidth });
    }
  }, {
    key: 'handleBarChartNodeRef',
    value: function handleBarChartNodeRef(barChartNode) {
      this.barChartNode = barChartNode;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dataset = _props.dataset,
          totalProp = _props.total;

      var total = totalProp || dataset.reduce(function (acc, curr) {
        return acc + curr.value;
      }, 0);
      var sortedDataSet = sortArrByDesc(dataset).filter(function (i) {
        return !!i.value;
      });

      console.log(this.props);

      return _react2.default.createElement(
        'div',
        (0, _BarChartSt2.default)('root', {}, this.props),
        _react2.default.createElement(
          'section',
          _extends({}, (0, _BarChartSt2.default)('rootContainer', {}, this.props), {
            ref: function ref(barChartNode) {
              return _this2.handleBarChartNodeRef(barChartNode);
            }
          }),
          sortedDataSet.map(function (item, index) {
            var barWidthInPercent = countPercentageFromBase(total, item.value, PERCENTAGE_PRECISION);

            var isShowTextStats = barWidthInPercent * _this2.state.barNodeWidth / 100 > MIN_BAR_WIDTH;

            return _react2.default.createElement(
              'div',
              _extends({}, (0, _BarChartSt2.default)('barItem', { colorIndex: index % COLORS_LENGTH }, _this2.props), {
                style: {
                  width: formatToPercent(barWidthInPercent)
                },
                'data-hook': 'bar-item',
                key: index
              }),
              isShowTextStats && _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                  'span',
                  { className: _BarChartSt2.default.barItemText, 'data-hook': 'bar-item-text' },
                  _react2.default.createElement(
                    'h3',
                    null,
                    item.value
                  )
                ),
                _react2.default.createElement(
                  'span',
                  {
                    className: _BarChartSt2.default.barItemTitle,
                    'data-hook': 'bar-item-title'
                  },
                  item.type
                )
              )
            );
          })
        )
      );
    }
  }]);

  return BarChart;
}(_react2.default.Component);

BarChart.displayName = 'BarChart';
BarChart.propTypes = {
  total: _propTypes.number,
  dataset: _propTypes.array,
  previewState: _propTypes.string,
  componentViewMode: _propTypes.string,
  orientation: _propTypes.string,
  isMobileView: _propTypes.bool,
  isDisabled: _propTypes.bool,
  style: _propTypes.object
};
BarChart.defaultProps = {
  total: DEFAULT_TOTAL,
  dataset: DEFAULT_DATASET,
  style: { width: 0, height: 0 }
};

/***/ }),

/***/ 440:
/*!**************************************!*\
  !*** ./components/BarChart/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BarChart = __webpack_require__(/*! ./BarChart.santa */ 662);

var _BarChart2 = __webpack_require__(/*! ./BarChart */ 356);

var _BarChartSt = __webpack_require__(/*! ./BarChart.st.css */ 239);

var _BarChartSt2 = _interopRequireDefault(_BarChartSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentType: 'wixui.BarChart',
  component: _BarChart2.BarChart,
  santaComponent: _BarChart.santaBarChart,
  skin: _BarChartSt2.default.$skin
};

/***/ }),

/***/ 662:
/*!***********************************************!*\
  !*** ./components/BarChart/BarChart.santa.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.santaBarChart = undefined;

var _createReactClass = __webpack_require__(/*! create-react-class */ 17);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _santaComponents = __webpack_require__(/*! santa-components */ 14);

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

var _barChartBehaviors = __webpack_require__(/*! ./behaviors/barChartBehaviors */ 663);

var _BarChart = __webpack_require__(/*! ./BarChart */ 356);

var _BarChartSt = __webpack_require__(/*! ./BarChart.st.css */ 239);

var _BarChartSt2 = _interopRequireDefault(_BarChartSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skinBasedComp = _santaComponents.mixins.skinBasedComp,
    runTimeCompData = _santaComponents.mixins.runTimeCompData;


var getComponentSkins = function getComponentSkins() {
  return {
    'wixui.skins.BarChart': _BarChartSt2.default.$skin
  };
};

/**
 * @class components.barChart
 * @extends {core.skinBasedComp}
 */

var santaBarChart = exports.santaBarChart = (0, _createReactClass2.default)({
  displayName: 'BarChart',

  mixins: [skinBasedComp(getComponentSkins()), runTimeCompData],

  propTypes: {
    structure: _santaComponents.santaTypesDefinitions.Component.structure.isRequired,
    compProp: _santaComponents.santaTypesDefinitions.Component.compProp.isRequired,
    compData: _santaComponents.santaTypesDefinitions.Component.compData.isRequired,
    componentViewMode: _santaComponents.santaTypesDefinitions.RenderFlags.componentViewMode,
    componentPreviewState: _santaComponents.santaTypesDefinitions.RenderFlags.componentPreviewState,
    styleId: _santaComponents.santaTypesDefinitions.Component.styleId,
    style: _santaComponents.santaTypesDefinitions.Component.style,
    isMobileView: _santaComponents.santaTypesDefinitions.isMobileView
  },

  statics: {
    compSpecificIsDomOnlyOverride: function compSpecificIsDomOnlyOverride() {
      return false;
    },
    getComponentSkins: getComponentSkins,
    behaviors: _barChartBehaviors.barChartBehaviors
  },

  getInitialState: function getInitialState() {
    return {
      total: this.props.compData.total,
      dataset: this.props.compData.dataset
    };
  },
  toggle: function toggle() {
    console.log('TOGGLED!');
  },
  getSkinProperties: function getSkinProperties() {
    var _this = this;

    var _props$compData = this.props.compData,
        dataset = _props$compData.dataset,
        total = _props$compData.total;

    var barChartProps = {
      styleId: this.props.styleId,
      className: this.props.styleId,
      style: this.props.style,
      width: _lodash2.default.get(this.props.structure, 'layout.width', 0),
      height: _lodash2.default.get(this.props.structure, 'layout.height', 0),
      previewState: this.props.componentPreviewState,
      componentViewMode: this.props.componentViewMode,
      isMobileView: this.props.isMobileView,
      dataset: dataset,
      total: total,
      ref: function ref(barChartRef) {
        _this.barChartRef = barChartRef;
      }
    };

    return {
      '': {
        children: [_santaComponents.utils.createReactElement(_BarChart.BarChart, barChartProps)]
      }
    };
  }
});

/***/ }),

/***/ 663:
/*!************************************************************!*\
  !*** ./components/BarChart/behaviors/barChartBehaviors.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var barChartBehaviors = exports.barChartBehaviors = {
  toggle: { methodName: 'toggle' }
};

/***/ }),

/***/ 9:
/*!*********************************************!*\
  !*** ../node_modules/fbjs/lib/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ })

}]);
//# sourceMappingURL=wixui.BarChart.chunk.js.map