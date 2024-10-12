AFRAME .registerComponent('page-controls', {
    schema:{
        pages:{
            type:'array',default:[
                {
                    page:"1",
                    color:"#d471aa"
                },
                {
                    page:"2",
                    color:"#494949"
                },
                {
                    page:"3",
                    color:"#794782"
                },
                {
                    page:"4",
                    color:"#7d0147"
                },
                {
                    page:"5",
                    color:"#b06c85"
                }
            ]
        },
        pageIndex:{type:
            'int', default:0
        }
    },
    init:function(){
        var pageEl=this.pageEl=document.querySelector('[layer]');
        pageEl.object3D.position.set(0,1.8,-2.5);
        var pageIndex=this.data.pageIndex;
        window.addEventListener("keydown",(a)=>{
            if(a.key=="ArrowRight" & pageIndex<4){
                pageIndex+=1;
                this.turnPage(pageIndex)

            }
            if(a.key=="ArrowLeft" & pageIndex>0){
                pageIndex-=1;
                this.turnPage(pageIndex)
                
            }
        })
    },
    turnPage:function(pageIndex){
        var pages=this.data.pages;
        var pageId=pages[pageIndex].page;
        var color=pages[pageIndex].color;
        this.pageEl.setAttribute('layer','src','#'+pageId);
        this.el.sceneEl.setAttribute('background','color',color);
    }
})