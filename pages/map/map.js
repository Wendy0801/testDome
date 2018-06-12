
Page({
    data: { // 参与页面渲染的数据
        latitude:'',
        longitude:''
    },
    onLoad: function () {
        wx.getLocation({
            type: 'wgs84',
            success: (res) => {
                // var latitude = res.latitude // 经度
                // var longitude = res.longitude // 纬度
                this.setData({
                    latitude: res.latitude,
                    longitude: res.longitude 
                })
            }
        })
    },
    
})