const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start() {
        // init logic
        this.label.string = this.text;
    }

    onBundle1Click() {
        cc.assetManager.loadBundle('bundle1', function (err, bundle) {
            if (err) {
                return console.error(err);
            }
            console.log('load bundle successfully.');
            bundle.loadScene('bundle1', function (err, scene) {
                if (err) {
                    return console.error(err);
                }
                console.log('load scene successfully.');
                cc.director.runScene(scene);
            });
        });
    }

    onBundle2Click() {
        cc.assetManager.loadBundle('bundle2', function (err, bundle) {
            if (err) {
                return console.error(err);
            }
            console.log('load bundle successfully.');
            bundle.loadScene('bundle2', function (err, scene) {
                if (err) {
                    return console.error(err);
                }
                console.log('load scene successfully.');
                cc.director.runScene(scene);
            });
        });
    }

}
