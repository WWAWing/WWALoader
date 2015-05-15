.PHONY: all
all: wwaload.long.js wwaload.long.noworker.js wwaload.js wwaload.noworker.js

wwaload.long.js: *.ts
	tsc --sourceMap loader_base.ts -t ES5 --out $@

wwaload.long.noworker.js: loader_base.ts noworker/loader_config.ts loader_core.ts loader_extractor.ts loader_util.ts wwa_data.ts
	cp loader_base.ts noworker
	cp loader_core.ts noworker
	cp loader_extractor.ts noworker
	cp loader_util.ts noworker
	cp wwa_data.ts noworker
	tsc --sourceMap noworker/loader_base.ts -t ES5 --out $@
	$(RM) noworker/loader_base.ts
	$(RM) noworker/loader_core.ts
	$(RM) noworker/loader_extractor.ts
	$(RM) noworker/loader_util.ts
	$(RM) noworker/wwa_data.ts

wwaload.js: wwaload.long.js closure/compiler.jar
	java -jar ./closure/compiler.jar < $< > $@

wwaload.noworker.js: wwaload.long.noworker.js closure/compiler.jar
	java -jar ./closure/compiler.jar < $< > $@

.PHONY: clean
clean:
	$(RM) wwaload.long.js wwaload.js wwaload.long.noworker.js wwaload.noworker.js


