function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var regenerator = runtime_1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function noop() {}

function assign(tar, src) {
  // @ts-ignore
  for (var k in src) {
    tar[k] = src[k];
  }

  return tar;
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    var lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (_typeof(lets) === 'object') {
      var merged = [];
      var len = Math.max($$scope.dirty.length, lets.length);

      for (var i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (var i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return function () {
    return node.removeEventListener(event, handler, options);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function children(element) {
  return Array.from(element.childNodes);
}

function claim_element(nodes, name, attributes, svg) {
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeName === name) {
      var j = 0;

      while (j < node.attributes.length) {
        var attribute = node.attributes[j];

        if (attributes[attribute.name]) {
          j++;
        } else {
          node.removeAttribute(attribute.name);
        }
      }

      return nodes.splice(i, 1)[0];
    }
  }

  return svg ? svg_element(name) : element(name);
}

function claim_text(nodes, data) {
  for (var i = 0; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeType === 3) {
      node.data = '' + data;
      return nodes.splice(i, 1)[0];
    }
  }

  return text(data);
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function set_data(text, data) {
  data = '' + data;
  if (text.data !== data) text.data = data;
}

function set_input_value(input, value) {
  if (value != null || input.value) {
    input.value = value;
  }
}

function set_style(node, key, value, important) {
  node.style.setProperty(key, value, important ? 'important' : '');
}

function select_option(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
}

function select_value(select) {
  var selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, false, false, detail);
  return e;
}

function query_selector_all(selector) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  return Array.from(parent.querySelectorAll(selector));
}

var current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error("Function called outside component initialization");
  return current_component;
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  var component = get_current_component();
  return function (type, detail) {
    var callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      var event = custom_event(type, detail);
      callbacks.slice().forEach(function (fn) {
        fn.call(component, event);
      });
    }
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}

var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}

var flushing = false;
var seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (var i = 0; i < dirty_components.length; i += 1) {
      var component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    dirty_components.length = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var _i = 0; _i < render_callbacks.length; _i += 1) {
      var callback = render_callbacks[_i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    var dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

var outroing = new Set();
var outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(function () {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

function destroy_block(block, lookup) {
  block.d(1);
  lookup.delete(block.key);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  var o = old_blocks.length;
  var n = list.length;
  var i = o;
  var old_indexes = {};

  while (i--) {
    old_indexes[old_blocks[i].key] = i;
  }

  var new_blocks = [];
  var new_lookup = new Map();
  var deltas = new Map();
  i = n;

  while (i--) {
    var child_ctx = get_context(ctx, list, i);
    var key = get_key(child_ctx);
    var block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  var will_move = new Set();
  var did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next, lookup.has(block.key));
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    var new_block = new_blocks[n - 1];
    var old_block = old_blocks[o - 1];
    var new_key = new_block.key;
    var old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    var _old_block = old_blocks[o];
    if (!new_lookup.has(_old_block.key)) destroy(_old_block, lookup);
  }

  while (n) {
    insert(new_blocks[n - 1]);
  }

  return new_blocks;
}

function get_spread_update(levels, updates) {
  var update = {};
  var to_null_out = {};
  var accounted_for = {
    $$scope: 1
  };
  var i = levels.length;

  while (i--) {
    var o = levels[i];
    var n = updates[i];

    if (n) {
      for (var key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (var _key3 in n) {
        if (!accounted_for[_key3]) {
          update[_key3] = n[_key3];
          accounted_for[_key3] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (var _key4 in o) {
        accounted_for[_key4] = 1;
      }
    }
  }

  for (var _key5 in to_null_out) {
    if (!(_key5 in update)) update[_key5] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return _typeof(spread_props) === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html

function bind(component, name, callback) {
  var index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor) {
  var _component$$$ = component.$$,
      fragment = _component$$$.fragment,
      on_mount = _component$$$.on_mount,
      on_destroy = _component$$$.on_destroy,
      after_update = _component$$$.after_update;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(function () {
    var new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  var $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props) {
  var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
  var parent_component = current_component;
  set_current_component(component);
  var prop_values = options.props || {};
  var $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty: dirty
  };
  var ready = false;
  $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if ($$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

var SvelteComponent = /*#__PURE__*/function () {
  function SvelteComponent() {
    _classCallCheck(this, SvelteComponent);
  }

  _createClass(SvelteComponent, [{
    key: "$destroy",
    value: function $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
  }, {
    key: "$on",
    value: function $on(type, callback) {
      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return function () {
        var index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
  }, {
    key: "$set",
    value: function $set() {// overridden by instance, if it has props
    }
  }]);

  return SvelteComponent;
}();

var subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */


function writable(value) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var stop;
  var subscribers = [];

  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;

      if (stop) {
        // store is ready
        var run_queue = !subscriber_queue.length;

        for (var i = 0; i < subscribers.length; i += 1) {
          var s = subscribers[i];
          s[1]();
          subscriber_queue.push(s, value);
        }

        if (run_queue) {
          for (var _i = 0; _i < subscriber_queue.length; _i += 2) {
            subscriber_queue[_i][0](subscriber_queue[_i + 1]);
          }

          subscriber_queue.length = 0;
        }
      }
    }
  }

  function update(fn) {
    set(fn(value));
  }

  function subscribe(run) {
    var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var subscriber = [run, invalidate];
    subscribers.push(subscriber);

    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }

    run(value);
    return function () {
      var index = subscribers.indexOf(subscriber);

      if (index !== -1) {
        subscribers.splice(index, 1);
      }

      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }

  return {
    set: set,
    update: update,
    subscribe: subscribe
  };
}

var CONTEXT_KEY = {};
var preload = function preload() {
  return {};
};

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var div1;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var span;
  var t1;
  var t2;
  var a0;
  var t3;
  var t4;
  var a1;
  var t5;
  var t6;
  var main;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[1].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  return {
    c: function c() {
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      span = element("span");
      t1 = text("Home");
      t2 = space();
      a0 = element("a");
      t3 = text("About");
      t4 = space();
      a1 = element("a");
      t5 = text("Refresh Data");
      t6 = space();
      main = element("main");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function l(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        class: true,
        alt: true,
        src: true
      });
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      span = claim_element(div1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, "Home");
      span_nodes.forEach(detach);
      t2 = claim_space(div1_nodes);
      a0 = claim_element(div1_nodes, "A", {
        href: true,
        rel: true,
        pre: true,
        class: true
      });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "About");
      a0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", {
        href: true,
        rel: true,
        pre: true,
        class: true
      });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "Refresh Data");
      a1_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t6 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      attr(img, "class", "click svelte-1wz98za");
      attr(img, "alt", "covid-19 virus logo");
      if (img.src !== (img_src_value = "/covid-19-sapper-demo/logo.jpg")) attr(img, "src", img_src_value);
      attr(div0, "class", "item");
      attr(span, "class", "item svelte-1wz98za");
      attr(a0, "href", "about");
      attr(a0, "rel", "prefetch");
      attr(a0, "pre", "");
      attr(a0, "class", "item");
      attr(a1, "href", "reset");
      attr(a1, "rel", "prefetch");
      attr(a1, "pre", "");
      attr(a1, "class", "item");
      attr(div1, "class", "ui top fixed menu");
      attr(main, "class", "svelte-1wz98za");
    },
    m: function m(target, anchor, remount) {
      insert(target, div1, anchor);
      append(div1, div0);
      append(div0, img);
      append(div1, t0);
      append(div1, span);
      append(span, t1);
      append(div1, t2);
      append(div1, a0);
      append(a0, t3);
      append(div1, t4);
      append(div1, a1);
      append(a1, t5);
      insert(target, t6, anchor);
      insert(target, main, anchor);

      if (default_slot) {
        default_slot.m(main, null);
      }

      current = true;
      if (remount) run_all(dispose);
      dispose = [listen(img, "click", navigateHome), listen(span, "click", navigateHome)];
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[0], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[0], dirty, null));
        }
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(div1);
      if (detaching) detach(t6);
      if (detaching) detach(main);
      if (default_slot) default_slot.d(detaching);
      run_all(dispose);
    }
  };
}

function navigateHome() {
  goto("/covid-19-sapper-demo");
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;

  $$self.$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  return [$$scope, $$slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Layout, _SvelteComponent);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    return _this;
  }

  return Layout;
}(SvelteComponent);

function _createSuper$1(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$1()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment$1(ctx) {
  var t0;
  var div2;
  var h1;
  var t1;
  var t2;
  var div1;
  var div0;
  var t3;
  var t4;
  var p;
  var t5_value =
  /*error*/
  ctx[0].message + "";
  var t5;
  return {
    c: function c() {
      t0 = space();
      div2 = element("div");
      h1 = element("h1");
      t1 = text("Covid-19 Tracker Error");
      t2 = space();
      div1 = element("div");
      div0 = element("div");
      t3 = text("There was error.");
      t4 = space();
      p = element("p");
      t5 = text(t5_value);
      this.h();
    },
    l: function l(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1flk9qr\"]", document.head);
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h1 = claim_element(div2_nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Covid-19 Tracker Error");
      h1_nodes.forEach(detach);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "There was error.");
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", {});
      var p_nodes = children(p);
      t5 = claim_text(p_nodes, t5_value);
      p_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h: function h() {
      document.title = "Covid 19 Error Page";
      attr(div0, "class", "header");
      attr(div1, "class", "ui error message");
      attr(div2, "class", "ui container");
    },
    m: function m(target, anchor) {
      insert(target, t0, anchor);
      insert(target, div2, anchor);
      append(div2, h1);
      append(h1, t1);
      append(div2, t2);
      append(div2, div1);
      append(div1, div0);
      append(div0, t3);
      append(div1, t4);
      append(div1, p);
      append(p, t5);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*error*/
      1 && t5_value !== (t5_value =
      /*error*/
      ctx[0].message + "")) set_data(t5, t5_value);
    },
    i: noop,
    o: noop,
    d: function d(detaching) {
      if (detaching) detach(t0);
      if (detaching) detach(div2);
    }
  };
}

function instance$1($$self, $$props, $$invalidate) {
  var error = $$props.error;
  console.log(error);

  $$self.$set = function ($$props) {
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
  };

  return [error];
}

var Error$1 = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Error, _SvelteComponent);

  var _super = _createSuper$1(Error);

  function Error(options) {
    var _this;

    _classCallCheck(this, Error);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      error: 0
    });
    return _this;
  }

  return Error;
}(SvelteComponent);

function _createSuper$2(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct$2()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_else_block(ctx) {
  var switch_instance_anchor;
  var current;
  var switch_instance_spread_levels = [
  /*level1*/
  ctx[4].props];
  var switch_value =
  /*level1*/
  ctx[4].component;

  function switch_props(ctx) {
    var switch_instance_props = {};

    for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }

    return {
      props: switch_instance_props
    };
  }

  if (switch_value) {
    var switch_instance = new switch_value(switch_props());
  }

  return {
    c: function c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l: function l(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m: function m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }

      insert(target, switch_instance_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var switch_instance_changes = dirty &
      /*level1*/
      16 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
      /*level1*/
      ctx[4].props)]) : {};

      if (switch_value !== (switch_value =
      /*level1*/
      ctx[4].component)) {
        if (switch_instance) {
          group_outros();
          var old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, function () {
            destroy_component(old_component, 1);
          });
          check_outros();
        }

        if (switch_value) {
          switch_instance = new switch_value(switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i: function i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) detach(switch_instance_anchor);
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
} // (19:1) {#if error}


function create_if_block(ctx) {
  var current;
  var error_1 = new Error$1({
    props: {
      error:
      /*error*/
      ctx[0],
      status:
      /*status*/
      ctx[1]
    }
  });
  return {
    c: function c() {
      create_component(error_1.$$.fragment);
    },
    l: function l(nodes) {
      claim_component(error_1.$$.fragment, nodes);
    },
    m: function m(target, anchor) {
      mount_component(error_1, target, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var error_1_changes = {};
      if (dirty &
      /*error*/
      1) error_1_changes.error =
      /*error*/
      ctx[0];
      if (dirty &
      /*status*/
      2) error_1_changes.status =
      /*status*/
      ctx[1];
      error_1.$set(error_1_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(error_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(error_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(error_1, detaching);
    }
  };
} // (18:0) <Layout segment="{segments[0]}" {...level0.props}>


function create_default_slot(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*error*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function o(local) {
      transition_out(if_block);
      current = false;
    },
    d: function d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach(if_block_anchor);
    }
  };
}

function create_fragment$2(ctx) {
  var current;
  var layout_spread_levels = [{
    segment:
    /*segments*/
    ctx[2][0]
  },
  /*level0*/
  ctx[3].props];
  var layout_props = {
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  for (var i = 0; i < layout_spread_levels.length; i += 1) {
    layout_props = assign(layout_props, layout_spread_levels[i]);
  }

  var layout = new Layout({
    props: layout_props
  });
  return {
    c: function c() {
      create_component(layout.$$.fragment);
    },
    l: function l(nodes) {
      claim_component(layout.$$.fragment, nodes);
    },
    m: function m(target, anchor) {
      mount_component(layout, target, anchor);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var layout_changes = dirty &
      /*segments, level0*/
      12 ? get_spread_update(layout_spread_levels, [dirty &
      /*segments*/
      4 && {
        segment:
        /*segments*/
        ctx[2][0]
      }, dirty &
      /*level0*/
      8 && get_spread_object(
      /*level0*/
      ctx[3].props)]) : {};

      if (dirty &
      /*$$scope, error, status, level1*/
      83) {
        layout_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      layout.$set(layout_changes);
    },
    i: function i(local) {
      if (current) return;
      transition_in(layout.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      transition_out(layout.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      destroy_component(layout, detaching);
    }
  };
}

function instance$2($$self, $$props, $$invalidate) {
  var stores = $$props.stores;
  var error = $$props.error;
  var status = $$props.status;
  var segments = $$props.segments;
  var level0 = $$props.level0;
  var _$$props$level = $$props.level1,
      level1 = _$$props$level === void 0 ? null : _$$props$level;
  setContext(CONTEXT_KEY, stores);

  $$self.$set = function ($$props) {
    if ("stores" in $$props) $$invalidate(5, stores = $$props.stores);
    if ("error" in $$props) $$invalidate(0, error = $$props.error);
    if ("status" in $$props) $$invalidate(1, status = $$props.status);
    if ("segments" in $$props) $$invalidate(2, segments = $$props.segments);
    if ("level0" in $$props) $$invalidate(3, level0 = $$props.level0);
    if ("level1" in $$props) $$invalidate(4, level1 = $$props.level1);
  };

  return [error, status, segments, level0, level1, stores];
}

var App = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(App, _SvelteComponent);

  var _super = _createSuper$2(App);

  function App(options) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      stores: 5,
      error: 0,
      status: 1,
      segments: 2,
      level0: 3,
      level1: 4
    });
    return _this;
  }

  return App;
}(SvelteComponent);

// This file is generated by Sapper — do not edit it!
var ignore = [];
var components = [{
  js: function js() {
    return import('./index.ba1dff67.js');
  },
  css: ["legacy/index.ba1dff67.css","legacy/client.80764277.css","legacy/helpers.6d256096.css"]
}, {
  js: function js() {
    return import('./about.fbdfc640.js');
  },
  css: ["legacy/about.fbdfc640.css","legacy/client.80764277.css"]
}, {
  js: function js() {
    return import('./reset.4c1bde68.js');
  },
  css: ["legacy/reset.4c1bde68.css","legacy/client.80764277.css"]
}, {
  js: function js() {
    return import('./[country].756895a1.js');
  },
  css: ["legacy/[country].756895a1.css","legacy/client.80764277.css","legacy/helpers.6d256096.css"]
}];
var routes = function (d) {
  return [{
    // index.svelte
    pattern: /^\/$/,
    parts: [{
      i: 0
    }]
  }, {
    // about.svelte
    pattern: /^\/about\/?$/,
    parts: [{
      i: 1
    }]
  }, {
    // reset.svelte
    pattern: /^\/reset\/?$/,
    parts: [{
      i: 2
    }]
  }, {
    // [country].svelte
    pattern: /^\/([^\/]+?)\/?$/,
    parts: [{
      i: 3,
      params: function params(match) {
        return {
          country: d(match[1])
        };
      }
    }]
  }];
}(decodeURIComponent);

function goto(href) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    replaceState: false
  };
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    _history[opts.replaceState ? 'replaceState' : 'pushState']({
      id: cid
    }, '', href);

    return navigate(target, null).then(function () {});
  }

  location.href = href;
  return new Promise(function (f) {}); // never resolves
}

var initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;
var ready = false;
var root_component;
var current_token;
var root_preloaded;
var current_branch = [];
var current_query = '{}';
var stores = {
  page: writable({}),
  preloading: writable(null),
  session: writable(initial_data && initial_data.session)
};
var $session;
var session_dirty;
stores.session.subscribe( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(value) {
    var target, token, _yield$hydrate_target, redirect, props, branch;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $session = value;

            if (ready) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            session_dirty = true;
            target = select_target(new URL(location.href));
            token = current_token = {};
            _context.next = 8;
            return hydrate_target(target);

          case 8:
            _yield$hydrate_target = _context.sent;
            redirect = _yield$hydrate_target.redirect;
            props = _yield$hydrate_target.props;
            branch = _yield$hydrate_target.branch;

            if (!(token !== current_token)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return");

          case 14:
            _context.next = 16;
            return render(redirect, branch, props, target.page);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var prefetching = null;

function set_prefetching(href, promise) {
  prefetching = {
    href: href,
    promise: promise
  };
}

var target;

function set_target(element) {
  target = element;
}

var uid = 1;

function set_uid(n) {
  uid = n;
}

var cid;

function set_cid(n) {
  cid = n;
}

var _history = typeof history !== 'undefined' ? history : {
  pushState: function pushState(state, title, href) {},
  replaceState: function replaceState(state, title, href) {},
  scrollRestoration: ''
};

var scroll_history = {};

function extract_query(search) {
  var query = Object.create(null);

  if (search.length > 0) {
    search.slice(1).split('&').forEach(function (searchParam) {
      var _$exec = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' '))),
          _$exec2 = _slicedToArray(_$exec, 3),
          key = _$exec2[1],
          _$exec2$ = _$exec2[2],
          value = _$exec2$ === void 0 ? '' : _$exec2$;

      if (typeof query[key] === 'string') query[key] = [query[key]];
      if (_typeof(query[key]) === 'object') query[key].push(value);else query[key] = value;
    });
  }

  return query;
}

function select_target(url) {
  if (url.origin !== location.origin) return null;
  if (!url.pathname.startsWith(initial_data.baseUrl)) return null;
  var path = url.pathname.slice(initial_data.baseUrl.length);

  if (path === '') {
    path = '/';
  } // avoid accidental clashes between server routes and page routes


  if (ignore.some(function (pattern) {
    return pattern.test(path);
  })) return;

  for (var i = 0; i < routes.length; i += 1) {
    var route = routes[i];
    var match = route.pattern.exec(path);

    if (match) {
      var query = extract_query(url.search);
      var part = route.parts[route.parts.length - 1];
      var params = part.params ? part.params(match) : {};
      var page = {
        host: location.host,
        path: path,
        query: query,
        params: params
      };
      return {
        href: url.href,
        route: route,
        match: match,
        page: page
      };
    }
  }
}

function handle_error(url) {
  var _location = location,
      host = _location.host,
      pathname = _location.pathname,
      search = _location.search;
  var session = initial_data.session,
      preloaded = initial_data.preloaded,
      status = initial_data.status,
      error = initial_data.error;

  if (!root_preloaded) {
    root_preloaded = preloaded && preloaded[0];
  }

  var props = {
    error: error,
    status: status,
    session: session,
    level0: {
      props: root_preloaded
    },
    level1: {
      props: {
        status: status,
        error: error
      },
      component: Error$1
    },
    segments: preloaded
  };
  var query = extract_query(search);
  render(null, [], props, {
    host: host,
    path: pathname,
    query: query,
    params: {}
  });
}

function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}

function navigate(_x2, _x3, _x4, _x5) {
  return _navigate.apply(this, arguments);
}

function _navigate() {
  _navigate = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(target, id, noscroll, hash) {
    var current_scroll, loaded, token, _yield$loaded, redirect, props, branch, scroll, deep_linked;

    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (id) {
              // popstate or initial navigation
              cid = id;
            } else {
              current_scroll = scroll_state(); // clicked on a link. preserve scroll state

              scroll_history[cid] = current_scroll;
              id = cid = ++uid;
              scroll_history[cid] = noscroll ? current_scroll : {
                x: 0,
                y: 0
              };
            }

            cid = id;
            if (root_component) stores.preloading.set(true);
            loaded = prefetching && prefetching.href === target.href ? prefetching.promise : hydrate_target(target);
            prefetching = null;
            token = current_token = {};
            _context2.next = 8;
            return loaded;

          case 8:
            _yield$loaded = _context2.sent;
            redirect = _yield$loaded.redirect;
            props = _yield$loaded.props;
            branch = _yield$loaded.branch;

            if (!(token !== current_token)) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return");

          case 14:
            _context2.next = 16;
            return render(redirect, branch, props, target.page);

          case 16:
            if (document.activeElement) document.activeElement.blur();

            if (!noscroll) {
              scroll = scroll_history[id];

              if (hash) {
                // scroll is an element id (from a hash), we need to compute y.
                deep_linked = document.getElementById(hash.slice(1));

                if (deep_linked) {
                  scroll = {
                    x: 0,
                    y: deep_linked.getBoundingClientRect().top
                  };
                }
              }

              scroll_history[cid] = scroll;
              if (scroll) scrollTo(scroll.x, scroll.y);
            }

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _navigate.apply(this, arguments);
}

function render(_x6, _x7, _x8, _x9) {
  return _render.apply(this, arguments);
}

function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(redirect, branch, props, page) {
    var _start, end;

    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!redirect) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", goto(redirect.location, {
              replaceState: true
            }));

          case 2:
            stores.page.set(page);
            stores.preloading.set(false);

            if (!root_component) {
              _context3.next = 8;
              break;
            }

            root_component.$set(props);
            _context3.next = 17;
            break;

          case 8:
            props.stores = {
              page: {
                subscribe: stores.page.subscribe
              },
              preloading: {
                subscribe: stores.preloading.subscribe
              },
              session: stores.session
            };
            _context3.next = 11;
            return root_preloaded;

          case 11:
            _context3.t0 = _context3.sent;
            props.level0 = {
              props: _context3.t0
            };
            // first load — remove SSR'd <head> contents
            _start = document.querySelector('#sapper-head-start');
            end = document.querySelector('#sapper-head-end');

            if (_start && end) {
              while (_start.nextSibling !== end) {
                detach$1(_start.nextSibling);
              }

              detach$1(_start);
              detach$1(end);
            }

            root_component = new App({
              target: target,
              props: props,
              hydrate: true
            });

          case 17:
            current_branch = branch;
            current_query = JSON.stringify(page.query);
            ready = true;
            session_dirty = false;

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _render.apply(this, arguments);
}

function part_changed(i, segment, match, stringified_query) {
  // TODO only check query string changes for preload functions
  // that do in fact depend on it (using static analysis or
  // runtime instrumentation)
  if (stringified_query !== current_query) return true;
  var previous = current_branch[i];
  if (!previous) return false;
  if (segment !== previous.segment) return true;

  if (previous.match) {
    if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
      return true;
    }
  }
}

function hydrate_target(_x10) {
  return _hydrate_target.apply(this, arguments);
}

function _hydrate_target() {
  _hydrate_target = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(target) {
    var route, page, segments, _redirect, props, preload_context, branch, l, stringified_query, match, segment_dirty;

    return regenerator.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            route = target.route, page = target.page;
            segments = page.path.split('/').filter(Boolean);
            _redirect = null;
            props = {
              error: null,
              status: 200,
              segments: [segments[0]]
            };
            preload_context = {
              fetch: function (_fetch) {
                function fetch(_x11, _x12) {
                  return _fetch.apply(this, arguments);
                }

                fetch.toString = function () {
                  return _fetch.toString();
                };

                return fetch;
              }(function (url, opts) {
                return fetch(url, opts);
              }),
              redirect: function redirect(statusCode, location) {
                if (_redirect && (_redirect.statusCode !== statusCode || _redirect.location !== location)) {
                  throw new Error("Conflicting redirects");
                }

                _redirect = {
                  statusCode: statusCode,
                  location: location
                };
              },
              error: function error(status, _error) {
                props.error = typeof _error === 'string' ? new Error(_error) : _error;
                props.status = status;
              }
            };

            if (!root_preloaded) {
              root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
                host: page.host,
                path: page.path,
                query: page.query,
                params: {}
              }, $session);
            }

            l = 1;
            _context5.prev = 7;
            stringified_query = JSON.stringify(page.query);
            match = route.pattern.exec(page.path);
            segment_dirty = false;
            _context5.next = 13;
            return Promise.all(route.parts.map( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(part, i) {
                var segment, j, _yield$load_component, component, preload, preloaded;

                return regenerator.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        segment = segments[i];
                        if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;
                        props.segments[l] = segments[i + 1]; // TODO make this less confusing

                        if (part) {
                          _context4.next = 5;
                          break;
                        }

                        return _context4.abrupt("return", {
                          segment: segment
                        });

                      case 5:
                        j = l++;

                        if (!(!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i)) {
                          _context4.next = 8;
                          break;
                        }

                        return _context4.abrupt("return", current_branch[i]);

                      case 8:
                        segment_dirty = false;
                        _context4.next = 11;
                        return load_component(components[part.i]);

                      case 11:
                        _yield$load_component = _context4.sent;
                        component = _yield$load_component.default;
                        preload = _yield$load_component.preload;

                        if (!(ready || !initial_data.preloaded[i + 1])) {
                          _context4.next = 25;
                          break;
                        }

                        if (!preload) {
                          _context4.next = 21;
                          break;
                        }

                        _context4.next = 18;
                        return preload.call(preload_context, {
                          host: page.host,
                          path: page.path,
                          query: page.query,
                          params: part.params ? part.params(target.match) : {}
                        }, $session);

                      case 18:
                        _context4.t0 = _context4.sent;
                        _context4.next = 22;
                        break;

                      case 21:
                        _context4.t0 = {};

                      case 22:
                        preloaded = _context4.t0;
                        _context4.next = 26;
                        break;

                      case 25:
                        preloaded = initial_data.preloaded[i + 1];

                      case 26:
                        return _context4.abrupt("return", props["level".concat(j)] = {
                          component: component,
                          props: preloaded,
                          segment: segment,
                          match: match,
                          part: part.i
                        });

                      case 27:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x13, _x14) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 13:
            branch = _context5.sent;
            _context5.next = 21;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](7);
            props.error = _context5.t0;
            props.status = 500;
            branch = [];

          case 21:
            return _context5.abrupt("return", {
              redirect: _redirect,
              props: props,
              branch: branch
            });

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[7, 16]]);
  }));
  return _hydrate_target.apply(this, arguments);
}

function load_css(chunk) {
  var href = "client/".concat(chunk);
  if (document.querySelector("link[href=\"".concat(href, "\"]"))) return;
  return new Promise(function (fulfil, reject) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;

    link.onload = function () {
      return fulfil();
    };

    link.onerror = reject;
    document.head.appendChild(link);
  });
}

function load_component(component) {
  // TODO this is temporary — once placeholders are
  // always rewritten, scratch the ternary
  var promises = typeof component.css === 'string' ? [] : component.css.map(load_css);
  promises.unshift(component.js());
  return Promise.all(promises).then(function (values) {
    return values[0];
  });
}

function detach$1(node) {
  node.parentNode.removeChild(node);
}

function prefetch(href) {
  var target = select_target(new URL(href, document.baseURI));

  if (target) {
    if (!prefetching || href !== prefetching.href) {
      set_prefetching(href, hydrate_target(target));
    }

    return prefetching.promise;
  }
}

function start(opts) {
  if ('scrollRestoration' in _history) {
    _history.scrollRestoration = 'manual';
  }

  set_target(opts.target);
  addEventListener('click', handle_click);
  addEventListener('popstate', handle_popstate); // prefetch

  addEventListener('touchstart', trigger_prefetch);
  addEventListener('mousemove', handle_mousemove);
  return Promise.resolve().then(function () {
    var _location2 = location,
        hash = _location2.hash,
        href = _location2.href;

    _history.replaceState({
      id: uid
    }, '', href);

    var url = new URL(location.href);
    if (initial_data.error) return handle_error();
    var target = select_target(url);
    if (target) return navigate(target, uid, true, hash);
  });
}

var mousemove_timeout;

function handle_mousemove(event) {
  clearTimeout(mousemove_timeout);
  mousemove_timeout = setTimeout(function () {
    trigger_prefetch(event);
  }, 20);
}

function trigger_prefetch(event) {
  var a = find_anchor(event.target);
  if (!a || a.rel !== 'prefetch') return;
  prefetch(a.href);
}

function handle_click(event) {
  // Adapted from https://github.com/visionmedia/page.js
  // MIT license https://github.com/visionmedia/page.js#license
  if (which(event) !== 1) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  var a = find_anchor(event.target);
  if (!a) return;
  if (!a.href) return; // check if link is inside an svg
  // in this case, both href and target are always inside an object

  var svg = _typeof(a.href) === 'object' && a.href.constructor.name === 'SVGAnimatedString';
  var href = String(svg ? a.href.baseVal : a.href);

  if (href === location.href) {
    if (!location.hash) event.preventDefault();
    return;
  } // Ignore if tag has
  // 1. 'download' attribute
  // 2. rel='external' attribute


  if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return; // Ignore if <a> has a target

  if (svg ? a.target.baseVal : a.target) return;
  var url = new URL(href); // Don't handle hash changes

  if (url.pathname === location.pathname && url.search === location.search) return;
  var target = select_target(url);

  if (target) {
    var noscroll = a.hasAttribute('sapper-noscroll');
    navigate(target, null, noscroll, url.hash);
    event.preventDefault();

    _history.pushState({
      id: cid
    }, '', url.href);
  }
}

function which(event) {
  return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
  while (node && node.nodeName.toUpperCase() !== 'A') {
    node = node.parentNode;
  } // SVG <a> elements have a lowercase name


  return node;
}

function handle_popstate(event) {
  scroll_history[cid] = scroll_state();

  if (event.state) {
    var url = new URL(location.href);

    var _target = select_target(url);

    if (_target) {
      navigate(_target, event.state.id);
    } else {
      location.href = location.href;
    }
  } else {
    // hashchange
    set_uid(uid + 1);
    set_cid(uid);

    _history.replaceState({
      id: cid
    }, '', location.href);
  }
}

start({
  target: document.querySelector('#sapper')
});

export { set_style as $, _possibleConstructorReturn as A, text as B, claim_text as C, set_data as D, binding_callbacks as E, bind as F, create_component as G, claim_component as H, mount_component as I, update_keyed_each as J, add_flush_callback as K, transition_in as L, transition_out as M, destroy_component as N, createEventDispatcher as O, destroy_block as P, add_render_callback as Q, set_input_value as R, SvelteComponent as S, select_option as T, select_value as U, commonjsGlobal as V, commonjsRequire as W, onMount as X, onDestroy as Y, query_selector_all as Z, _typeof as _, _asyncToGenerator as a, goto as a0, assign as a1, get_spread_update as a2, get_spread_object as a3, check_outros as a4, group_outros as a5, regenerator as b, createCommonjsModule as c, _inherits as d, _classCallCheck as e, _assertThisInitialized as f, empty as g, insert as h, init as i, detach as j, element as k, space as l, claim_element as m, children as n, claim_space as o, attr as p, append as q, run_all as r, safe_not_equal as s, toggle_class as t, listen as u, is_function as v, _slicedToArray as w, noop as x, destroy_each as y, _getPrototypeOf as z };
