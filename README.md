# t_fileupload
```
element ui upload Component
twice packaging
<img src="http://img.blog.csdn.net/20170516171221723?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc3RhcnJ5bmluZ2xvbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast"/>
[demo](http://img.blog.csdn.net/20170516171221723?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc3RhcnJ5bmluZ2xvbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast) : http://img.blog.csdn.net/20170516171221723?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc3RhcnJ5bmluZ2xvbmc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast
```

## [Try the source](https://github.com/tengqingya/myFirstVue)

```
[https://github.com/tengqingya/myFirstVue](https://github.com/tengqingya/myFirstVue)
```

### How to use?
```bash
npm install t_fileupload
```

### Example

```vue
<template>
	<fileupload @fileadd="fileAdd" @filedel="fileDel" :files="fileShow" :num="fileNum" :action="action"></fileupload>
</template>

<script>
            fileAdd:function (file) {
                this.fileList.push(file)
            },
            fileDel:function (file) {
                removeArrByValue(this.fileList,file)
            },

            fileList:[],
            fileShow:[],
            fileNum:3,
            action:"/manage/upload/pic"

            const removeArrByValue = (arr, val)=> {
                    for(var i=0; i<arr.length; i++) {
                        if(arr[i] == val) {
                            arr.splice(i, 1);
                            break;
                        }
                    }
                }
</script>
```
# explain
```

 1. fileadd:method that u add a file and uploaded.
 2. filedel:method that u delete a file.
 3. files:files that u what to show the first time before  uploading a
    file(use the image url,such
    as:http://image.***.com/image/ebook/823df1d1320742efabebe46565518abaz/auto)
 4. num:limit the upload file numbers,default 1.
 5. action:the upload url from server(JAVA/NODE SERVER)

```