const base = {
    get() {
        return {
            url : "http://localhost:8080/yiyuanjizhenxitong/",
            name: "yiyuanjizhenxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yiyuanjizhenxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医院急诊系统"
        } 
    }
}
export default base
