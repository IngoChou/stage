var View = require("awayjs-core/lib/containers/View");
var Vector3D = require("awayjs-core/lib/core/geom/Vector3D");
var URLLoader = require("awayjs-core/lib/core/net/URLLoader");
var URLLoaderDataFormat = require("awayjs-core/lib/core/net/URLLoaderDataFormat");
var URLRequest = require("awayjs-core/lib/core/net/URLRequest");
var DirectionalLight = require("awayjs-core/lib/entities/DirectionalLight");
var AwayEvent = require("awayjs-core/lib/events/Event");
var StaticLightPicker = require("awayjs-core/lib/materials/lightpickers/StaticLightPicker");
var ParserUtils = require("awayjs-core/lib/parsers/ParserUtils");
var PerspectiveProjection = require("awayjs-core/lib/projections/PerspectiveProjection");
var PrimitiveTorusPrefab = require("awayjs-core/lib/prefabs/PrimitiveTorusPrefab");
var ImageTexture = require("awayjs-core/lib/textures/ImageTexture");
var RequestAnimationFrame = require("awayjs-core/lib/utils/RequestAnimationFrame");
var Debug = require("awayjs-core/lib/utils/Debug");
var DefaultRenderer = require("awayjs-stagegl/lib/core/render/DefaultRenderer");
var TriangleMethodMaterial = require("awayjs-stagegl/lib/materials/TriangleMethodMaterial");
var TorusLight = (function () {
    function TorusLight() {
        Debug.THROW_ERRORS = false;
        Debug.ENABLE_LOG = false;
        Debug.LOG_PI_ERRORS = false;
        this._view = new View(new DefaultRenderer());
        this._view.camera.projection = new PerspectiveProjection(60);
        this._torus = new PrimitiveTorusPrefab(220, 80, 32, 16, false);
        this.loadResources();
    }
    TorusLight.prototype.loadResources = function () {
        var _this = this;
        var urlRequest = new URLRequest("assets/dots.png");
        var urlLoader = new URLLoader();
        urlLoader.dataFormat = URLLoaderDataFormat.BLOB;
        urlLoader.addEventListener(AwayEvent.COMPLETE, function (event) { return _this.imageCompleteHandler(event); });
        urlLoader.load(urlRequest);
    };
    TorusLight.prototype.imageCompleteHandler = function (event) {
        var _this = this;
        var imageLoader = event.target;
        this._image = ParserUtils.blobToImage(imageLoader.data);
        this._image.onload = function (event) { return _this.onLoadComplete(event); };
    };
    TorusLight.prototype.onLoadComplete = function (event) {
        var _this = this;
        var ts = new ImageTexture(this._image, false);
        var light = new DirectionalLight();
        light.direction = new Vector3D(0, 0, 1);
        light.diffuse = .7;
        light.specular = 1;
        this._view.scene.addChild(light);
        var lightPicker = new StaticLightPicker([light]);
        var matTx = new TriangleMethodMaterial(ts, true, true, false);
        matTx.lightPicker = lightPicker;
        this._torus.material = matTx;
        this._mesh = this._torus.getNewObject();
        this._view.scene.addChild(this._mesh);
        this._raf = new RequestAnimationFrame(this.render, this);
        this._raf.start();
        window.onresize = function (event) { return _this.resize(event); };
        this.resize();
    };
    TorusLight.prototype.render = function (dt) {
        if (dt === void 0) { dt = null; }
        this._mesh.rotationY += 1;
        this._view.render();
    };
    TorusLight.prototype.resize = function (event) {
        if (event === void 0) { event = null; }
        this._view.y = 0;
        this._view.x = 0;
        this._view.width = window.innerWidth;
        this._view.height = window.innerHeight;
    };
    return TorusLight;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZ2h0cy90b3J1c2xpZ2h0LnRzIl0sIm5hbWVzIjpbIlRvcnVzTGlnaHQiLCJUb3J1c0xpZ2h0LmNvbnN0cnVjdG9yIiwiVG9ydXNMaWdodC5sb2FkUmVzb3VyY2VzIiwiVG9ydXNMaWdodC5pbWFnZUNvbXBsZXRlSGFuZGxlciIsIlRvcnVzTGlnaHQub25Mb2FkQ29tcGxldGUiLCJUb3J1c0xpZ2h0LnJlbmRlciIsIlRvcnVzTGlnaHQucmVzaXplIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLElBQUksV0FBaUIsaUNBQWlDLENBQUMsQ0FBQztBQUMvRCxJQUFPLFFBQVEsV0FBZ0Isb0NBQW9DLENBQUMsQ0FBQztBQUNyRSxJQUFPLFNBQVMsV0FBZSxvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3JFLElBQU8sbUJBQW1CLFdBQWEsOENBQThDLENBQUMsQ0FBQztBQUN2RixJQUFPLFVBQVUsV0FBZSxxQ0FBcUMsQ0FBQyxDQUFDO0FBRXZFLElBQU8sZ0JBQWdCLFdBQWMsMkNBQTJDLENBQUMsQ0FBQztBQUNsRixJQUFPLFNBQVMsV0FBZSw4QkFBOEIsQ0FBQyxDQUFDO0FBQy9ELElBQU8saUJBQWlCLFdBQWEsMERBQTBELENBQUMsQ0FBQztBQUNqRyxJQUFPLFdBQVcsV0FBZSxxQ0FBcUMsQ0FBQyxDQUFDO0FBQ3hFLElBQU8scUJBQXFCLFdBQVksbURBQW1ELENBQUMsQ0FBQztBQUM3RixJQUFPLG9CQUFvQixXQUFhLDhDQUE4QyxDQUFDLENBQUM7QUFDeEYsSUFBTyxZQUFZLFdBQWUsdUNBQXVDLENBQUMsQ0FBQztBQUMzRSxJQUFPLHFCQUFxQixXQUFZLDZDQUE2QyxDQUFDLENBQUM7QUFDdkYsSUFBTyxLQUFLLFdBQWdCLDZCQUE2QixDQUFDLENBQUM7QUFFM0QsSUFBTyxlQUFlLFdBQWMsZ0RBQWdELENBQUMsQ0FBQztBQUN0RixJQUFPLHNCQUFzQixXQUFZLHFEQUFxRCxDQUFDLENBQUM7QUFFaEcsSUFBTSxVQUFVO0lBUWZBLFNBUktBLFVBQVVBO1FBVWRD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LENBQUNBO1FBRWpCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQTtRQUNyQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDeENBLENBQUNBO0lBQ0ZOLGlCQUFDQTtBQUFEQSxDQXJGQSxBQXFGQ0EsSUFBQSIsImZpbGUiOiJsaWdodHMvVG9ydXNMaWdodC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcm9iYmF0ZW1hbi9XZWJzdG9ybVByb2plY3RzL2F3YXlqcy1zdGFnZWdsLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3XHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvY29udGFpbmVycy9WaWV3XCIpO1xuaW1wb3J0IFZlY3RvcjNEXHRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2NvcmUvZ2VvbS9WZWN0b3IzRFwiKTtcbmltcG9ydCBVUkxMb2FkZXJcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2NvcmUvbmV0L1VSTExvYWRlclwiKTtcbmltcG9ydCBVUkxMb2FkZXJEYXRhRm9ybWF0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2NvcmUvbmV0L1VSTExvYWRlckRhdGFGb3JtYXRcIik7XG5pbXBvcnQgVVJMUmVxdWVzdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvY29yZS9uZXQvVVJMUmVxdWVzdFwiKTtcbmltcG9ydCBNZXNoXHRcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZW50aXRpZXMvTWVzaFwiKTtcbmltcG9ydCBEaXJlY3Rpb25hbExpZ2h0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvZW50aXRpZXMvRGlyZWN0aW9uYWxMaWdodFwiKTtcbmltcG9ydCBBd2F5RXZlbnRcdFx0XHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9FdmVudFwiKTtcbmltcG9ydCBTdGF0aWNMaWdodFBpY2tlclx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9tYXRlcmlhbHMvbGlnaHRwaWNrZXJzL1N0YXRpY0xpZ2h0UGlja2VyXCIpO1xuaW1wb3J0IFBhcnNlclV0aWxzXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlclV0aWxzXCIpO1xuaW1wb3J0IFBlcnNwZWN0aXZlUHJvamVjdGlvblx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvcHJvamVjdGlvbnMvUGVyc3BlY3RpdmVQcm9qZWN0aW9uXCIpO1xuaW1wb3J0IFByaW1pdGl2ZVRvcnVzUHJlZmFiXHRcdFx0PSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3ByZWZhYnMvUHJpbWl0aXZlVG9ydXNQcmVmYWJcIik7XG5pbXBvcnQgSW1hZ2VUZXh0dXJlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9JbWFnZVRleHR1cmVcIik7XG5pbXBvcnQgUmVxdWVzdEFuaW1hdGlvbkZyYW1lXHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi91dGlscy9SZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIik7XG5pbXBvcnQgRGVidWdcdFx0XHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtY29yZS9saWIvdXRpbHMvRGVidWdcIik7XG5cbmltcG9ydCBEZWZhdWx0UmVuZGVyZXJcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1zdGFnZWdsL2xpYi9jb3JlL3JlbmRlci9EZWZhdWx0UmVuZGVyZXJcIik7XG5pbXBvcnQgVHJpYW5nbGVNZXRob2RNYXRlcmlhbFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtc3RhZ2VnbC9saWIvbWF0ZXJpYWxzL1RyaWFuZ2xlTWV0aG9kTWF0ZXJpYWxcIik7XG5cbmNsYXNzIFRvcnVzTGlnaHRcbntcblx0cHJpdmF0ZSBfdmlldzpWaWV3O1xuXHRwcml2YXRlIF90b3J1czpQcmltaXRpdmVUb3J1c1ByZWZhYjtcblx0cHJpdmF0ZSBfbWVzaDpNZXNoO1xuXHRwcml2YXRlIF9yYWY6UmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRwcml2YXRlIF9pbWFnZTpIVE1MSW1hZ2VFbGVtZW50O1xuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdERlYnVnLlRIUk9XX0VSUk9SUyA9IGZhbHNlO1xuXHRcdERlYnVnLkVOQUJMRV9MT0cgPSBmYWxzZTtcblx0XHREZWJ1Zy5MT0dfUElfRVJST1JTID0gZmFsc2U7XG5cblx0XHR0aGlzLl92aWV3ID0gbmV3IFZpZXcobmV3IERlZmF1bHRSZW5kZXJlcigpKTtcblx0XHR0aGlzLl92aWV3LmNhbWVyYS5wcm9qZWN0aW9uID0gbmV3IFBlcnNwZWN0aXZlUHJvamVjdGlvbig2MCk7XG5cdFx0dGhpcy5fdG9ydXMgPSBuZXcgUHJpbWl0aXZlVG9ydXNQcmVmYWIoMjIwLCA4MCwgMzIsIDE2LCBmYWxzZSk7XG5cblx0XHR0aGlzLmxvYWRSZXNvdXJjZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgbG9hZFJlc291cmNlcygpXG5cdHtcblx0XHR2YXIgdXJsUmVxdWVzdDpVUkxSZXF1ZXN0ID0gbmV3IFVSTFJlcXVlc3QoXCJhc3NldHMvZG90cy5wbmdcIik7XG5cblx0XHR2YXIgdXJsTG9hZGVyOlVSTExvYWRlciA9IG5ldyBVUkxMb2FkZXIoKTtcblx0XHR1cmxMb2FkZXIuZGF0YUZvcm1hdCA9IFVSTExvYWRlckRhdGFGb3JtYXQuQkxPQjtcblx0XHR1cmxMb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihBd2F5RXZlbnQuQ09NUExFVEUsIChldmVudDpBd2F5RXZlbnQpID0+IHRoaXMuaW1hZ2VDb21wbGV0ZUhhbmRsZXIoZXZlbnQpKTtcblx0XHR1cmxMb2FkZXIubG9hZCh1cmxSZXF1ZXN0KTtcblx0fVxuXG5cdHByaXZhdGUgaW1hZ2VDb21wbGV0ZUhhbmRsZXIoZXZlbnQ6QXdheUV2ZW50KVxuXHR7XG5cdFx0dmFyIGltYWdlTG9hZGVyOlVSTExvYWRlciA9IDxVUkxMb2FkZXI+IGV2ZW50LnRhcmdldDtcblxuXHRcdHRoaXMuX2ltYWdlID0gUGFyc2VyVXRpbHMuYmxvYlRvSW1hZ2UoaW1hZ2VMb2FkZXIuZGF0YSk7XG5cdFx0dGhpcy5faW1hZ2Uub25sb2FkID0gKGV2ZW50OkV2ZW50KSA9PiB0aGlzLm9uTG9hZENvbXBsZXRlKGV2ZW50KTtcblx0fVxuXG5cdHByaXZhdGUgb25Mb2FkQ29tcGxldGUoZXZlbnQ6RXZlbnQpXG5cdHtcblx0XHR2YXIgdHM6SW1hZ2VUZXh0dXJlID0gbmV3IEltYWdlVGV4dHVyZSh0aGlzLl9pbWFnZSwgZmFsc2UpO1xuXG5cdFx0dmFyIGxpZ2h0OkRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodCgpO1xuXHRcdGxpZ2h0LmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzRCgwLCAwLCAxKTtcblx0XHRsaWdodC5kaWZmdXNlID0gLjc7XG5cdFx0bGlnaHQuc3BlY3VsYXIgPSAxO1xuXG5cdFx0dGhpcy5fdmlldy5zY2VuZS5hZGRDaGlsZChsaWdodCk7XG5cblx0XHR2YXIgbGlnaHRQaWNrZXI6U3RhdGljTGlnaHRQaWNrZXIgPSBuZXcgU3RhdGljTGlnaHRQaWNrZXIoW2xpZ2h0XSk7XG5cblx0XHR2YXIgbWF0VHg6VHJpYW5nbGVNZXRob2RNYXRlcmlhbCA9IG5ldyBUcmlhbmdsZU1ldGhvZE1hdGVyaWFsKHRzLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG5cdFx0bWF0VHgubGlnaHRQaWNrZXIgPSBsaWdodFBpY2tlcjtcblxuXHRcdHRoaXMuX3RvcnVzLm1hdGVyaWFsID0gbWF0VHg7XG5cblx0XHR0aGlzLl9tZXNoID0gPE1lc2g+IHRoaXMuX3RvcnVzLmdldE5ld09iamVjdCgpO1xuXG5cdFx0dGhpcy5fdmlldy5zY2VuZS5hZGRDaGlsZCh0aGlzLl9tZXNoKTtcblxuXHRcdHRoaXMuX3JhZiA9IG5ldyBSZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIgLCB0aGlzKTtcblx0XHR0aGlzLl9yYWYuc3RhcnQoKTtcblxuXHRcdHdpbmRvdy5vbnJlc2l6ZSA9IChldmVudDpVSUV2ZW50KSA9PiB0aGlzLnJlc2l6ZShldmVudCk7XG5cblx0XHR0aGlzLnJlc2l6ZSgpO1xuXHR9XG5cblxuXHRwdWJsaWMgcmVuZGVyKGR0Om51bWJlciA9IG51bGwpOnZvaWRcblx0e1xuXHRcdHRoaXMuX21lc2gucm90YXRpb25ZICs9IDE7XG5cdFx0dGhpcy5fdmlldy5yZW5kZXIoKTtcblx0fVxuXG5cblx0cHVibGljIHJlc2l6ZShldmVudDpVSUV2ZW50ID0gbnVsbClcblx0e1xuXHRcdHRoaXMuX3ZpZXcueSA9IDA7XG5cdFx0dGhpcy5fdmlldy54ID0gMDtcblxuXHRcdHRoaXMuX3ZpZXcud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHR0aGlzLl92aWV3LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0fVxufSJdfQ==