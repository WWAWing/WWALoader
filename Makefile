.PHONY: all
all: wwaload.long.js wwaload.long.noworker.js wwaload.js wwaload.noworker.js

wwaload.long.js: ./src/*.ts
	tsc --sourceMap ./src/loader_base.ts -t ES5 --outDir .. --out $@

wwaload.long.noworker.js: ./src/loader_base.ts ./src/noworker/loader_config.ts ./src/loader_core.ts ./src/loader_extractor.ts ./src/loader_util.ts ./src/wwa_data.ts
	cp ./src/loader_base.ts ./src/noworker
	cp ./src/loader_core.ts ./src/noworker
	cp ./src/loader_extractor.ts ./src/noworker
	cp ./src/loader_util.ts ./src/noworker
	cp ./src/wwa_data.ts ./src/noworker
	tsc --sourceMap ./src/noworker/loader_base.ts -t ES5 --outDir ../.. --out $@
	$(RM) ./src/noworker/loader_base.ts
	$(RM) ./src/noworker/loader_core.ts
	$(RM) ./src/noworker/loader_extractor.ts
	$(RM) ./src/noworker/loader_util.ts
	$(RM) ./src/noworker/wwa_data.ts

wwaload.js: wwaload.long.js closure/compiler.jar
	java -jar ./closure/compiler.jar < $< > $@

wwaload.noworker.js: wwaload.long.noworker.js closure/compiler.jar
	java -jar ./closure/compiler.jar < $< > $@

.PHONY: clean
clean:
	$(RM) wwaload.long.js wwaload.js wwaload.long.noworker.js wwaload.noworker.js


