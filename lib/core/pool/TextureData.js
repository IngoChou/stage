/**
 *
 * @class away.pool.TextureDataBase
 */
var TextureData = (function () {
    function TextureData(pool, context, textureProxy) {
        this._pool = pool;
        this.context = context;
        this.textureProxy = textureProxy;
    }
    /**
     *
     */
    TextureData.prototype.dispose = function () {
        this._pool.disposeItem(this.textureProxy);
        this.texture.dispose();
        this.texture = null;
    };
    /**
     *
     */
    TextureData.prototype.invalidate = function () {
        this.invalid = true;
    };
    return TextureData;
})();
module.exports = TextureData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvcG9vbC90ZXh0dXJlZGF0YS50cyJdLCJuYW1lcyI6WyJUZXh0dXJlRGF0YSIsIlRleHR1cmVEYXRhLmNvbnN0cnVjdG9yIiwiVGV4dHVyZURhdGEuZGlzcG9zZSIsIlRleHR1cmVEYXRhLmludmFsaWRhdGUiXSwibWFwcGluZ3MiOiJBQU9BLEFBSUE7OztHQURHO0lBQ0csV0FBVztJQVloQkEsU0FaS0EsV0FBV0EsQ0FZSkEsSUFBb0JBLEVBQUVBLE9BQXFCQSxFQUFFQSxZQUE2QkE7UUFFckZDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1FBQ2xCQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxPQUFPQSxDQUFDQTtRQUN2QkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsWUFBWUEsQ0FBQ0E7SUFDbENBLENBQUNBO0lBRUREOztPQUVHQTtJQUNJQSw2QkFBT0EsR0FBZEE7UUFFQ0UsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7UUFFMUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO1FBQ3ZCQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUNyQkEsQ0FBQ0E7SUFFREY7O09BRUdBO0lBQ0lBLGdDQUFVQSxHQUFqQkE7UUFFQ0csSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDckJBLENBQUNBO0lBQ0ZILGtCQUFDQTtBQUFEQSxDQXJDQSxBQXFDQ0EsSUFBQTtBQUVELEFBQXFCLGlCQUFaLFdBQVcsQ0FBQyIsImZpbGUiOiJjb3JlL3Bvb2wvVGV4dHVyZURhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JvYmJhdGVtYW4vV2Vic3Rvcm1Qcm9qZWN0cy9hd2F5anMtc3RhZ2VnbC8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVRleHR1cmVEYXRhXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi9jb3JlL3Bvb2wvSVRleHR1cmVEYXRhXCIpO1xuaW1wb3J0IFRleHR1cmVQcm94eUJhc2VcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1jb3JlL2xpYi90ZXh0dXJlcy9UZXh0dXJlUHJveHlCYXNlXCIpO1xuXG5pbXBvcnQgVGV4dHVyZURhdGFQb29sXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtc3RhZ2VnbC9saWIvY29yZS9wb29sL1RleHR1cmVEYXRhUG9vbFwiKTtcbmltcG9ydCBDb250ZXh0R0xCYXNlXHRcdFx0XHQ9IHJlcXVpcmUoXCJhd2F5anMtc3RhZ2VnbC9saWIvY29yZS9zdGFnZWdsL0NvbnRleHRHTEJhc2VcIik7XG5pbXBvcnQgSVRleHR1cmVCYXNlXHRcdFx0XHRcdD0gcmVxdWlyZShcImF3YXlqcy1zdGFnZWdsL2xpYi9jb3JlL3N0YWdlZ2wvSVRleHR1cmVCYXNlXCIpO1xuXG4vKipcbiAqXG4gKiBAY2xhc3MgYXdheS5wb29sLlRleHR1cmVEYXRhQmFzZVxuICovXG5jbGFzcyBUZXh0dXJlRGF0YSBpbXBsZW1lbnRzIElUZXh0dXJlRGF0YVxue1xuXHRwcml2YXRlIF9wb29sOlRleHR1cmVEYXRhUG9vbDtcblxuXHRwdWJsaWMgY29udGV4dDpDb250ZXh0R0xCYXNlO1xuXG5cdHB1YmxpYyB0ZXh0dXJlOklUZXh0dXJlQmFzZTtcblxuXHRwdWJsaWMgdGV4dHVyZVByb3h5OlRleHR1cmVQcm94eUJhc2U7XG5cblx0cHVibGljIGludmFsaWQ6Ym9vbGVhbjtcblxuXHRjb25zdHJ1Y3Rvcihwb29sOlRleHR1cmVEYXRhUG9vbCwgY29udGV4dDpDb250ZXh0R0xCYXNlLCB0ZXh0dXJlUHJveHk6VGV4dHVyZVByb3h5QmFzZSlcblx0e1xuXHRcdHRoaXMuX3Bvb2wgPSBwb29sO1xuXHRcdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cdFx0dGhpcy50ZXh0dXJlUHJveHkgPSB0ZXh0dXJlUHJveHk7XG5cdH1cblxuXHQvKipcblx0ICpcblx0ICovXG5cdHB1YmxpYyBkaXNwb3NlKClcblx0e1xuXHRcdHRoaXMuX3Bvb2wuZGlzcG9zZUl0ZW0odGhpcy50ZXh0dXJlUHJveHkpO1xuXG5cdFx0dGhpcy50ZXh0dXJlLmRpc3Bvc2UoKTtcblx0XHR0aGlzLnRleHR1cmUgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqL1xuXHRwdWJsaWMgaW52YWxpZGF0ZSgpXG5cdHtcblx0XHR0aGlzLmludmFsaWQgPSB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCA9IFRleHR1cmVEYXRhOyJdfQ==