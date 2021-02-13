class MyPromise {
	constructor(fnToCall) {
		var state = 'pending';
		function resolve() {
			state = 'resolved';
			if (this.successHandler) {
				this.successHandler.apply(this, arguments);
			}
		}
		function reject() {
			state = 'rejected';
			if (this.errorHandler) {
				this.errorHandler.apply(this, arguments);
			}
		}
		try {
			fnToCall.apply(this, [resolve.bind(this), reject.bind(this)]);
		} catch (error) {
			reject.call(this, this.errorHandler);
		}
	}
	then(fnSuccessHandler) {
		this.successHandler = fnSuccessHandler;
		return this;
	}
	catch(errorHandler) {
		this.errorHandler = errorHandler;
		return this;
	}
	all(aPromises) {
		var oPromise = new MyPromise(function (resolve, reject) {
			var iCount = 0;
			aPromises.forEach((oPromise) => {
				oPromise.then(() => {
					iCount++; // when count reaches all promises length, resolve the main promise
					if (iCount === aPromises.length) {
						resolve();
					}
				});
			});
		}); // return the main promise
		return oPromise;
	}
}

function myFunc() {
	new MyPromise((resolve, reject) => {
		setTimeout(() => {
			console.log('hello');
			resolve('with love');
			reject();
		}, 2000);
	})
		.then((params) => {
			console.log('world with: ' + params);
		})
		.catch(() => {
			console.log('error');
		});
}

myFunc();
