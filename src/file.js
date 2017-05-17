export const rowObj = function (a) {
    this.url = a
}

export const rowFile = function (...a) {
    var rowFile={}
    rowFile.status='ready'
    rowFile.name='name'
    rowFile.size=0
    rowFile.percentage=0
    rowFile.percentage=0
    rowFile.uid=1
    rowFile.raw=new rowObj(a[0])
    return rowFile;
}
