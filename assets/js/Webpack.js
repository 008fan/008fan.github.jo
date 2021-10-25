// export class Webpack{
//     constructor(arr){
//         this.entry=arr.entry;
//         this.filename=arr.output.filename.substr(0,6);
//         this.path=arr.output.path;
//         this.filenameafter=arr.output.filename.substr(6);
//         this.compile();
//     }
//     compile(){
//         console.log("将"+this.entry+"中的代码打包到"+this.path+this.filename+"文件夹中,文件名称叫"+this.filenameafter)
//     }
// }
// export class Webpack{
//     constructor(arr){
//        let {entry,output}=arr;
//        console.log(entry);
//          console.log(output);
//        let{filename,path}=output;
//        console.log(filename);
//        console.log(path);
//        let [dir,dirafter]=filename.split('/');
//        console.log(dir);
//        console.log(dirafter);
//        console.log("将"+entry+"中的代码打包到"+path+"/"+dir+"文件夹中,文件名称叫"+dirafter)
//     }
// }

export class Webpack {
    constructor(arr) {
        let {entry ,output}=arr;
        console.log(entry);
        console.log(output);
        let {filename,path} =output;
        console.log(filename);
        console.log(path);
        let [dir,dirafter]=filename.split('.');
        for(var key in entry){
            dir=entry[key];
            dirafter=key;
            console.log(dir);
            console.log(dirafter);
            console.log("将" +dir+ "中的代码打包到" +path + "/" + dirafter + "文件夹中,文件名称叫" + dirafter + "." + this.random() + ".js")
        }
    }
        random() {
                return Math.floor(Math.random() * 899999999999 + 100000000000)
            }


    //     this.entry = arr.entry;
    //     this.filename = arr.output.filename.split('.')[0];
    //     this.filenames = arr.output.filename.split('.')[1];
    //     this.path = arr.output.path;
    //     for (var key in this.entry) {
    //         this.filename = this.entry[key];
    //         this.name = key;
    //     console.log("将" + this.filename + "中的代码打包到" + this.path + "/" + this.name + "文件夹中,文件名称叫" + this.name + "." + this.random() + ".js")
    //     }
  
    // random() {
    //     return Math.floor(Math.random() * 899999999999 + 100000000000)
    // }
}