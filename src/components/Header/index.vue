<template>
    <header id="header">
        <slot></slot>
        <img class="chopcar-img"
             v-if="isShowCar"
             @click="gotoShopCar"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE/UlEQVR4XuWbWaxdYxTHf/8HREgTQxAJQU2pIIIIT/WiIiRI9IFoghpbSlMiTcU1BZGqoaYiEZX0oWIWQx94QdKQSEMoGm2oqnqoGFISWbKufU5OT/c+5xv2PXfv2+/x5FvrW+u3v3GtdcRu3rSb+0/jAZjZJcC5wFHAV8BaSS/U9eEaDcDMrgGeKXF2TNJddUDoAjCz/YFjgL0rFP8gaUMdg4boMLP7gMUD+i6WdH+IrkF9xgGY2Y3AYwHKNgIvS7o1oG9yFzN7CFgUoGChpGUB/Sq7qPjyPw748mXCKyRdmzNwlayZ+YfwDxLarpf0dGjn/n4OYC7wbIKCgyRtS5CrFDEzX+++7mPbDZKeihXy/g7gTmAsQfhsSR8myJWKmNlyYF6GvgWSQpbxTkM4gCuB5xMGnifpyQS5XUTM7GHglhp0LZK0NEZPZxN8BbgoRhB4XNJNkTJlzj8I3Jarp0f+dkmuM6h1ABwCvAGcHiT1f6d3JJ0X0b/M+XuAJTk6KmTvkHRviN6dLkJmdhLg94H+9kHJbxslHRkySFkfM5uZKhsqF7JHDb0JmtlhgF+A9igZ+DhJ34Qa1MR+QwG40Wbmd/DjSxyo7RQYEZwtwOfA15J8yYc9hszsbSBrvY/IwZhh1vixGzoDYm9nMYZMZt8rQgFUvcom0/g6xh4LBXAm8HEdIzZMxwWhAPYB/miY8XWYc2gQgOIk+AI4oY5RG6JjtaTZMQCeA65qiPF1mDFH0soYAO68Q5gK7S9guqSfYwDMAL6cCt4Dr0u6MPgi1HHazH4Dpk0BCPMlPZEC4F1gVssB/Av4G2Y8wBu8BIqTIDV61CRmr0nqxj5iAbigB0/a3OZK6kbAYgFMB75rsffbi+n/S8eHKADFMvgd2LelEFZKmtNrewqAj4CzWgpgtqTVuQA8/n5dCwFs8qCOpB25AOZ7RLiFAJZL2iXjlLIEzgHeayGA0yR91m93CoAjgO9bBqAylxkNoDgJ/gb2bAmErcCpkjaX2ZsKYB1wYgsAvAn413+rytZUAC8Bl5Uo9ZBzHTm+XLZ/ApskdS88dQNYADxSonS7pP1yrR+lfOoM8LRWWbrMbd9L0j+jdCJnrFQABwC/Vgw8Q5JnklrRkgAUJ4Gv95NLvDxfkmeSWtFyAFTFBpIqNSaLVg4Ajwx5hKiJzWuX1gN3S/IcYGXLAeCxQQ8rHdhEAoVN6ySVLdOuyckAin1gBXB1gwEgaaCPuQA8Zd7kDe8TSQNjF1kAilnghVKPNnQWLJO0cEL2gF6lRUX3Gf7oaAgIrwRZH1JQnT0DGuJwshm1AjCzg4vLkVeb+Qnhu/CEVJib2bHFjPMx1xZjRafwawMwoLZ/PA2d/In6BM3MI9JeTd4fl/ypePpG/Y+gFgBm5g+jgXV/w46jEEBmdjTw7ZC+UcCzAZhZ6F1gqaSQ/wBU+mdmnwZutLMkvR8CNQuAmcVmipILK80sJi039PzvwMkFEGOUj3mppFUhX6a/T0JZ/zRJnsUa2HIB3AzE/GUlupy9Y33IPtPnadD/GXIB+DXTU2WhLcioMmVNnQF+JHnZzOEBBPw+cErItKwAELPcRrMHFG+By4EXAwBcLOnVgH7tOQV61uewypE1kjylltUaeQ/ogeDltP5/HX8QdbJGnkBZJemBLM97hBt5E+x1zszceX8L+D9NPS01Ia1xb4EJ8XIESv8Dc6GsqnG6rsUAAAAASUVORK5CYII="
             alt="">
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: {
                type: String,
                default: "喵喵电影"
            },
            isShowCar: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            /**
             * 跳转购物车
             */
            gotoShopCar() {
                this.$router.push("/shopcar")
            }
        }
    };
</script>

<style scoped>
    #header {
        width: 100%;
        height: 50px;
        color: #fff;
        background: #e54847;
        border-bottom: 1px solid #e54847;
        position: relative;
    }

    #header h1 {
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        font-weight: normal;
    }

    #header i {
        position: absolute;
        left: 5px;
        top: 50%;
        margin-top: -13px;
        font-size: 26px;
    }

    .chopcar-img {
        position: absolute;
        z-index: 10000;
        cursor: pointer;
        width: 30px;
        float: left;
        margin: 10px auto 10px 10px;
    }
</style>
