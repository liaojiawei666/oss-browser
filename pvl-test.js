const OSS=require("ali-oss");
const client=new OSS({
    accessKeyId:process.env.OSS_ACCESS_KEY_ID,
    accessKeySecret:process.env.OSS_ACCESS_KEY_SECRET,
    sldEnable:true,
    region:"oss-cn-hangzhou",
   // bucket:"0523-dest-1",
    endpoint:"https://ep-bp1id25e6e57b2c2ee1d.oss.cn-hangzhou.privatelink.aliyuncs.com"
});

function bucketList(){
    client.listBuckets().then(res=>{
        console.log(res);
    })
}

function list(){
    client.listV2().then(res=>{
        console.log(res);
    }).catch(e=>{
        console.error(e);
    })    
}
//list();
bucketList();