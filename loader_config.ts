module loader_conf {
    export interface LoaderConf {
        is_worker: boolean;
    };
    export var conf = {
        is_worker: true
    };
}