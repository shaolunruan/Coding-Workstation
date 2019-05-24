mongodb学习手册
===
***

## 启动mongodb
```shell
cd f:\mongodb\bin

mongod --dbpath F:\mongodb\data\db
```

## 使用mongodb

### 常用口令汇总：

```shell
	show dbs//查看已有的数据库
	use itying//创建或者使用数据库·
	db.user.insert({"user":"zhangsan","age":20})//插入数据·
	show collections//查看有哪些表
	db.user.find({})//查询数据，可以按条件查找//用的时候看手册
	db.user.find({}).sort({"age":1})//把user表里面的恩age字段按升序顺序排序//降序是-1
	db.user.find({}).limit(2)//查看前两条数据
	db.user.find({"age":{$gt:24}}).conunt()//查询年龄大于24的user的个数//
	db.user.drop//删除该表
	db.user.update({"name":"wangwu",{$set:{"name":"wangwu666"}}})//修改数据
```


按索引查询数据//用的时候自己查手册
//用双重索引要比单个索引要快


//vscode全屏切换F11
//ctrl+\,代码分屏

## 导入数据
```shell
mongoimport -d alibaba_2018_csv -c machine_meta --type csv --fields "machine_id,time_stamp,disaster_level_1,disaster_level_2,cpu_num,mem_size,status" --file E:\lucky_data\test_monitor\machine_meta.csv

mongoimport -d alibaba_2018_csv -c resultDay1 --type csv --fields "inst_name,task_name,job_name,task_type,status,start_time,end_time,machine_id,seq_no,total_seq_no,cpu_avg,cpu_max,mem_avg,mem_max" --file E:\lucky_data\test_monitor\resultDay1.csv

mongoimport -d alibaba_2018_csv -c usageDay2 --type csv --fields "machine_id,time_stamp,cpu_util_percent,mem_util_percent,mem_gps,mpki,net_in,net_out,disk_io_percent,warning" --file E:\lucky_data\test_monitor\usageflag2.csv
```
## 导出数据库
```shell
mongoexport -d alibaba_2018_csv -c machine_meta -o F:\mongodb\output
```
<center><font color='OrangeRed' size=5>后续敬请补充!</font><center>