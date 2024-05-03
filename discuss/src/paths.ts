const paths = {
    homePath(){
        return ("/");
    },
    topicShow(topicslug:string){
        return `/topic/${topicslug}`
    },  
    postCreate(topicslug:string){
        return `/topic/${topicslug}/posts/new`
    },
    postShow(topicslug:string){
        return `/topic/${topicslug}`
    }

}

export default paths;