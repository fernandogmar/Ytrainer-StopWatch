describe("StopWatch", function(){
	it("has to be define",function(){
		expect(StopWatch).toBeDefined();
	});			
	it("has getTime method", function(){
		var stopWatch = new StopWatch();
		
		expect(stopWatch.getTime).toBeDefined();
	});
	
	describe("getTime", function(){
		describe("should return the time of StopWatch in milliseconds", function(){
			beforeEach(function(){
				stopWatch = new StopWatch();
			}
			);

			it("returns zero when StopWatch is not started", function(){
				
				expect(stopWatch.getTime()).toEqual(0);
			});
			
			it("returns nonzero when StopWatch has been started", function(){
				
				stopWatch.start();
				expect(stopWatch.getTime()).not.toEqual(0);
				//y que fuera un número _.isNumber();
				
			});
			
			it("returns zero after reset StopWatch", function(){				
				stopWatch.start();
				stopWatch.reset();
				expect(stopWatch.getTime()).toEqual(0);
			});
		});
	});
});