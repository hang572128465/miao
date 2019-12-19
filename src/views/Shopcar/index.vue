<template>
    <div id="detailContrainer" class="slide-enter-active">
        <Header title="购物车" :isShowCar="false">
            <i class="iconfont icon-right" @touchstart="handleToBack"></i>
        </Header>
        <div class="shop-page" id="shopPage">
            <ul class="outer-box">
                <li class="shop-box" v-for="(shop,index) in json">
                    <div class="clearfix goods-box" v-for="(goods,goodsIndex) in shop.items">
                        <img
                                :src="goods.select ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYzNkNjM0YS1hMzZhLWJiNDMtOTM1My04YmNkMWM3MzQxZWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTQ5QjA2ODZCRERCMTFFNkI2MDRGQzQ4NkUxQjE5NDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTQ5QjA2ODVCRERCMTFFNkI2MDRGQzQ4NkUxQjE5NDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjkwZjdjY2MtZDM0OC1hNjQxLWE0ZjAtYjMwMTA0NzkxYWMwIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmI3OWQ4OWItN2E3My0xMWU2LWJiOTgtZWQwMTY0ZDcxOWZhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+p0VllgAAAVBQTFRF/////0o5/2lb//v7//v6//Lw//79/97b//Hv/4V5/8G7//X0/+vp/1dH/9jU/5qR/4F2/5SK/5+W/1ZG/2RW/5mQ/5OJ/8K8/35y/5eO/04+/2pc/9rX/+De/2RV/4h9/6mh/6qi/15P/9vX//Lx//j3//z8//Dv/0s6/1dI//Tz/5uS/+ro/1pL/049/5iO/5WL/56V//7+/9/c/1pK/+/t/19Q/4F1/+Dd/4B0/0w7/1lJ/1tM/2ZX/11O/08+/8C6/5mP/1A//2ZY/6if/8O9/+3r/7+5/5eN/+Lf/8/K/21f//Py/8bA/7ex/8rG/39y/7Gq/2NU//39/1FB/7my/9fU/2BR/1ND/7y2/62l//n4/5GH/42D/1VF/3Bj/9PP//r6/2xe/6GZ/9fT/7Kq/66m/4N4/5KI/4d8//n5/39z/6ad/2la/9nW/6Oai7EWegAAAfRJREFUeNqEVed/okAQnV0UBClSLIgaTTT2kn7p7WpyNeVq6vWS3P3/3w4NxgV2dT7AzP7e7jBv3wwApPFqSXSU7W3FEUsqDyyTjWW8KwnlSKQspHfxsiFTYdGeqS2QCwua2YuGcem2HQvttdtSYGlWt/7S0uQsfZaMK6uZOP2745nVCnFeYopjVchNJUZnplYiTCogspIaulIhDmMsXtjxamvPwFibWa8O3vpTmGD2IHnLjE0CxsyW+zSSTMDvqudohquD6QfMel/vP77z8tM8qLdMBn+g9Weej1UosjIf/0KKMAySJRAlOo4/Rxe5+0gSAQtU3PwZev91FAoY6lRy5m10ckUKrg7ZaxqwifYOfARkIUvooTF0vqDsKwgAidT/Cl6T3KDOi4DW60Qxny7R5lLf+YjW0oFPcYsh6GkcIuxe2hu09iHUUaKP8CpGn5+/rNVOQ8VpJXiLiXhpEx3Vat/CLDiqK4o8OQMKCH0P4/qiAEMjl1rvHlJo7csMZMV3Nw2acJUBbz17ksK7+h2Zi5Oaa9EbQZI1vl2tJ/cDIMGxcVzi5+jKx48UQjaVDHtI/an49qWsHH3spYK5pI1uaLxGuxs7FFZ1pelr8XxT0elDRJ7bwsm0UOa4svAoibfmZCYVvFoUHbPTMR2xGPh9/BdgAJteLA0WvkrNAAAAAElFTkSuQmCC':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYzNkNjM0YS1hMzZhLWJiNDMtOTM1My04YmNkMWM3MzQxZWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkUzQzE5RUFCREQ5MTFFNjg2RTRBNzkzQURENTVBMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkUzQzE5RTlCREQ5MTFFNjg2RTRBNzkzQURENTVBMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MmJkMDQ5Zi05YmM2LTQ0YzktYWE1ZC01YmMxY2UxZGVhZDciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowODQxMDQwNi1mODNkLTExNzktOGM5NC1iMGQzZWZkNDY0ODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6GjBL6AAAAb1BMVEX////4+Pj9/f3Nzc3KysqsrKz+/v61tbXh4eHBwcHv7+/V1dWzs7PMzMz6+vrt7e319fXQ0NCoqKjDw8Ourq7s7Ozw8PCwsLCtra22tra/v7/g4OD8/Pz5+fnLy8vExMSvr6/Ozs7FxcXr6+vAwMD8hNjOAAABFElEQVR42oyV53aEIBCFhybFXrCvW5L3f8aYZE+CuyBzf3nwk2EKVwBXiU3bSTSNmNrUJhBSVQ+SKXOh9GIUk0NdeTGyCWbcBcPERt451eVvqyTv1MtSwrPSF6bM+OGoq54L/7mLWa/OfvpKQxnSq/7fk+sgt5Oa/+WRFXCiIlueuXUlnKocf+vBc4go/wleCRIDifjuUc0gKlbvpRn6ONgPCVgJCEkLKcOALIVWYUDVgjQY0EgYCQYkIzQUA9IGD6JDo5NBlwdd8A9UCyeLHwr0mOEHFzbkVUBcru4Zc0FeV7wB7M+PM0tx3q1z2KQ+18N3Ydt7jbX4jXTxVJWL+6Gb/V1wEjD7m2v2t4DZR34fXwIMAGUSDWuJOf7yAAAAAElFTkSuQmCC'"
                                class="fl goodsCheck"
                                @click="goodsSelect(index,goodsIndex)"
                        />
                        <!--<img :src="goods.img" class="goodsImg fl"/>-->
                        <img class="goodsImg fl" :src="goods.img | setWH('65.90')"/>
                        <div class="goods-detail fl">
                            <p class="goods-title">{{goods.nm}}</p>
                            <div class="clearfix price--container">
                                <p class="price fl">￥{{goods.jg}}</p>
                                <div class="clearfix number-box fr">
                                    <span
                                            class="fl reduceIcon"
                                            @click="changeNumber(-1,index,goodsIndex)"
                                    >-</span>
                                    <input type="number" v-model="goods.sl" class="fl goods-number"/>
                                    <span
                                            class="fl plusIcon"
                                            @click="changeNumber(1,index,goodsIndex)"
                                    >+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="bottom-action clearfix">
                <img
                        :src="all_select ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYzNkNjM0YS1hMzZhLWJiNDMtOTM1My04YmNkMWM3MzQxZWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTQ5QjA2ODZCRERCMTFFNkI2MDRGQzQ4NkUxQjE5NDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTQ5QjA2ODVCRERCMTFFNkI2MDRGQzQ4NkUxQjE5NDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjkwZjdjY2MtZDM0OC1hNjQxLWE0ZjAtYjMwMTA0NzkxYWMwIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmI3OWQ4OWItN2E3My0xMWU2LWJiOTgtZWQwMTY0ZDcxOWZhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+p0VllgAAAVBQTFRF/////0o5/2lb//v7//v6//Lw//79/97b//Hv/4V5/8G7//X0/+vp/1dH/9jU/5qR/4F2/5SK/5+W/1ZG/2RW/5mQ/5OJ/8K8/35y/5eO/04+/2pc/9rX/+De/2RV/4h9/6mh/6qi/15P/9vX//Lx//j3//z8//Dv/0s6/1dI//Tz/5uS/+ro/1pL/049/5iO/5WL/56V//7+/9/c/1pK/+/t/19Q/4F1/+Dd/4B0/0w7/1lJ/1tM/2ZX/11O/08+/8C6/5mP/1A//2ZY/6if/8O9/+3r/7+5/5eN/+Lf/8/K/21f//Py/8bA/7ex/8rG/39y/7Gq/2NU//39/1FB/7my/9fU/2BR/1ND/7y2/62l//n4/5GH/42D/1VF/3Bj/9PP//r6/2xe/6GZ/9fT/7Kq/66m/4N4/5KI/4d8//n5/39z/6ad/2la/9nW/6Oai7EWegAAAfRJREFUeNqEVed/okAQnV0UBClSLIgaTTT2kn7p7WpyNeVq6vWS3P3/3w4NxgV2dT7AzP7e7jBv3wwApPFqSXSU7W3FEUsqDyyTjWW8KwnlSKQspHfxsiFTYdGeqS2QCwua2YuGcem2HQvttdtSYGlWt/7S0uQsfZaMK6uZOP2745nVCnFeYopjVchNJUZnplYiTCogspIaulIhDmMsXtjxamvPwFibWa8O3vpTmGD2IHnLjE0CxsyW+zSSTMDvqudohquD6QfMel/vP77z8tM8qLdMBn+g9Weej1UosjIf/0KKMAySJRAlOo4/Rxe5+0gSAQtU3PwZev91FAoY6lRy5m10ckUKrg7ZaxqwifYOfARkIUvooTF0vqDsKwgAidT/Cl6T3KDOi4DW60Qxny7R5lLf+YjW0oFPcYsh6GkcIuxe2hu09iHUUaKP8CpGn5+/rNVOQ8VpJXiLiXhpEx3Vat/CLDiqK4o8OQMKCH0P4/qiAEMjl1rvHlJo7csMZMV3Nw2acJUBbz17ksK7+h2Zi5Oaa9EbQZI1vl2tJ/cDIMGxcVzi5+jKx48UQjaVDHtI/an49qWsHH3spYK5pI1uaLxGuxs7FFZ1pelr8XxT0elDRJ7bwsm0UOa4svAoibfmZCYVvFoUHbPTMR2xGPh9/BdgAJteLA0WvkrNAAAAAElFTkSuQmCC':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxYzNkNjM0YS1hMzZhLWJiNDMtOTM1My04YmNkMWM3MzQxZWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkUzQzE5RUFCREQ5MTFFNjg2RTRBNzkzQURENTVBMTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkUzQzE5RTlCREQ5MTFFNjg2RTRBNzkzQURENTVBMTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MmJkMDQ5Zi05YmM2LTQ0YzktYWE1ZC01YmMxY2UxZGVhZDciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowODQxMDQwNi1mODNkLTExNzktOGM5NC1iMGQzZWZkNDY0ODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6GjBL6AAAAb1BMVEX////4+Pj9/f3Nzc3KysqsrKz+/v61tbXh4eHBwcHv7+/V1dWzs7PMzMz6+vrt7e319fXQ0NCoqKjDw8Ourq7s7Ozw8PCwsLCtra22tra/v7/g4OD8/Pz5+fnLy8vExMSvr6/Ozs7FxcXr6+vAwMD8hNjOAAABFElEQVR42oyV53aEIBCFhybFXrCvW5L3f8aYZE+CuyBzf3nwk2EKVwBXiU3bSTSNmNrUJhBSVQ+SKXOh9GIUk0NdeTGyCWbcBcPERt451eVvqyTv1MtSwrPSF6bM+OGoq54L/7mLWa/OfvpKQxnSq/7fk+sgt5Oa/+WRFXCiIlueuXUlnKocf+vBc4go/wleCRIDifjuUc0gKlbvpRn6ONgPCVgJCEkLKcOALIVWYUDVgjQY0EgYCQYkIzQUA9IGD6JDo5NBlwdd8A9UCyeLHwr0mOEHFzbkVUBcru4Zc0FeV7wB7M+PM0tx3q1z2KQ+18N3Ydt7jbX4jXTxVJWL+6Gb/V1wEjD7m2v2t4DZR34fXwIMAGUSDWuJOf7yAAAAAElFTkSuQmCC'"
                        class="all-select fl"
                        @click="allSelect()"
                />
                <button class="fr buy-btn" v-if="isEdit == false" @click="pay">结算</button>
                <button class="delete-btn fr" @click="deleteBtn()" v-if="isEdit == false">删除</button>
                <p class="fr count-number" v-if="isEdit == false">
                    合计：
                    <span>{{count.toFixed(2)}}</span>
                </p>
            </div>
        </div>
        <div class="mark"></div>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import $ from "jquery";

    export default {
        components: {
            Header
        },
        data() {
            return {
                isEdit: false,
                count: 0,
                all_select: false,
                json: []
            };
        },
        activated() {
            this.json = [
                {
                    select: false,
                    show: true,
                    items: JSON.parse(sessionStorage.getItem("movieList"))
                }
            ];
            this.json[0].items.map(data => {
                data.jg = 32;
                data.sl = 1;
                data.select = false;
            });
            console.log(this.json);
        },
        methods: {
            /**
             * 返回上一页
             */
            handleToBack() {
                this.$router.back();
            },
            shopSelect: function (i) {
                var _this = this;
                _this.json[i].select = !_this.json[i].select;
                for (var t = 0; t < _this.json[i].items.length; t++) {
                    _this.json[i].items[t].select = _this.json[i].select;
                }
                for (var n = 0; n < _this.json.length; n++) {
                    if (_this.json[n].select == false) {
                        _this.all_select = false;
                        _this.sumPrice();
                        return;
                    } else {
                        _this.all_select = true;
                    }
                }
                _this.sumPrice();
            },
            goodsSelect: function (i, g) {
                var _this = this;
                _this.json[i].items[g].select = !_this.json[i].items[g].select;
                for (var t = 0; t < _this.json[i].items.length; t++) {
                    if (_this.json[i].items[t].select == false) {
                        _this.json[i].select = false;
                        _this.all_select = false;
                        _this.sumPrice();
                        return;
                    } else {
                        _this.json[i].select = true;
                    }
                }
                for (var n = 0; n < _this.json.length; n++) {
                    if (_this.json[n].select == false) {
                        _this.all_select = false;
                        _this.sumPrice();
                        return;
                    } else {
                        _this.all_select = true;
                    }
                }
                _this.sumPrice();
            },
            allSelect: function () {
                var _this = this;
                _this.all_select = !_this.all_select;
                for (var i = 0; i < _this.json.length; i++) {
                    _this.json[i].select = _this.all_select;
                    for (var t = 0; t < _this.json[i].items.length; t++) {
                        _this.json[i].items[t].select = _this.all_select;
                    }
                }
                _this.sumPrice();
            },
            changeNumber: function (num, i, g) {
                var _this = this;
                if (_this.json[i].items[g].sl == 1) {
                    if (num == -1) {
                        _this.json[i].items[g].sl = 1;
                    } else {
                        _this.json[i].items[g].sl = _this.json[i].items[g].sl + num;
                    }
                } else {
                    _this.json[i].items[g].sl = _this.json[i].items[g].sl + num;
                }
                _this.sumPrice();
            },
            sumPrice: function () {
                var _this = this;
                var countNum = 0;
                for (var s = 0; s < _this.json.length; s++) {
                    for (var o = 0; o < _this.json[s].items.length; o++) {
                        if (_this.json[s].items[o].select == true) {
                            countNum +=
                                parseInt(_this.json[s].items[o].jg) *
                                parseInt(_this.json[s].items[o].sl);
                        }
                    }
                }
                _this.count = countNum;
            },
            //公共提示框
            myalert(str) {
                var div = '<div class="mark"></div>';
                $('.mark').html(str);
                $('.mark').show();
                setTimeout(function () {
                    $('.mark').hide();
                }, 2000)
            },
            /**
             * 删除
             **/
            deleteBtn: function () {
                var _this = this;
                for (var s = 0; s < _this.json[0].items.length; s++) {
                    if (_this.json[0].items[s].select == true) {
                        _this.json[0].items.splice(s, 1);
                    }
                }
                sessionStorage.setItem(
                    "movieList",
                    JSON.stringify(_this.json[0].items)
                );
                this.sumPrice();
            },
            /**
             * 结算
             */
            pay() {
                console.log(this.count);
                if (this.count <= 0) {
                    this.myalert('订单金额不能为0');
                } else {
                    this.myalert("金额￥" + this.count.toFixed(2) + "元支付成功");
                }
                this.deleteBtn();
                this.sumPrice();
            }
        }
    }
</script>

<style scoped>
    .clearfix:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0;
    }

    .clearfix {
        zoom: 1;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    img {
        display: block;
    }

    .shop-page {
        width: 100%;
    }

    .title-box {
        width: 100%;
        height: 100px;
        background: orange;
        position: fixed;
        top: 0;
        left: 0;
    }

    .title-box .title {
        width: 100%;
        text-align: center;
        line-height: 100px;
        font-size: 16px;
    }

    .title-box .title i {
        font-size: 14px;
        font-style: normal;
    }

    .manage-btn {
        position: absolute;
        top: 42px;
        right: 30px;
        font-size: 16px;
        line-height: 16px;
    }

    .outer-box {
        padding: 10px 0 50px;
    }

    .shop-box {
        margin: 20px 12px;
        border-radius: 10px;
        background: #fff;
    }

    .shop-title {
        padding: 10px 0;
    }

    .shop-title .checkImg {
        width: 20px;
        height: 20px;
        margin-left: 10px;
    }

    .shop-title .shopTitle {
        font-size: 14px;
        line-height: 20px;
        margin: 0 10px;
    }

    .shop-title .arrowImg {
        width: 18px;
        height: 18px;
        margin: 1px 0;
    }

    .goods-box {
        width: 100%;
        padding-bottom: 20px;
    }

    .goodsCheck {
        width: 20px;
        height: 20px;
        margin: 45px 10px;
    }

    .goodsImg {
        width: 65px;
        height: 90px;
    }

    .goods-detail {
        margin-left: 10px;
        width: calc(100% - 130px);
        font-size: 12px;
    }

    .goods-title {
        width: 100%;
        color: #666;
        line-height: 18px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .parameter {
        margin: 5px 0;
    }

    .price {
        font-size: 14px;
        line-height: 25px;
        color: orange;
    }

    .number-box {
        border: 1px solid #ccc;
        width: 102px;
        height: 24px;
        margin-right: 20px;
    }

    .reduceIcon,
    .plusIcon {
        display: block;
        width: 30px;
        height: 24px;
        line-height: 24px;
        text-align: center;
    }

    .goods-number {
        display: block;
        width: 40px;
        height: 22px;
        text-align: center;
        line-height: 22px;
        border: 0;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }

    .bottom-action {
        width: 100%;
        height: 50px;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
    }

    .all-select {
        width: 20px;
        height: 20px;
        margin: 15px 22px;
    }

    .buy-btn {
        background: orange;
        padding: 6px 20px;
        margin: 10px;
        text-align: center;
        border: 0;
        border-radius: 10px;
        color: #fff;
    }

    .count-number {
        padding: 18px 0;
    }

    .count-number span {
        color: orange;
        font-size: 16px;
    }

    .delete-btn {
        padding: 6px 20px;
        margin: 10px;
        text-align: center;
        border: 1px solid orange;
        border-radius: 10px;
        background: #fff;
    }

    .price--container {
        margin-top: 10vw;
    }

    .mark {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        height: 1rem;
        line-height: 0.88rem;
        width: 50%;
        text-align: center;
        font-size: 0.28rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 0.1rem;
        z-index: 100;
    }

    .icon-right {
        margin-left: 30vw;
    }
</style>
