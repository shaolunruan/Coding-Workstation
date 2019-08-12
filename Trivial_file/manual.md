项目启动说明
===
***
>to: 官老师
from: 阮劭伦

***
### 数据库连接
实验所用的数据我放在了压缩包里，是用mongoDB装的
由于导入数据库时数据字段不同会导致项目运行时找不到数据，所以字段名必须一致
我将导入数据库时的命令行语句写出来，到时直接复制我的命令就可以了，不过要修改一下"路径名"(电脑中如果没有mongoDB先要安装)

```shell
//导入数据(E:\lucky_data\test_monitor\是我存放数据文件的文件夹，到时候可以换成实际的文件夹)
mongoimport -d alibaba_2018_csv -c machine_meta --type csv --fields "machine_id,time_stamp,disaster_level_1,disaster_level_2,cpu_num,mem_size,status" --file 路径名\machine_meta.csv

mongoimport -d alibaba_2018_csv -c resultDay1 --type csv --fields "inst_name,task_name,job_name,task_type,status,start_time,end_time,machine_id,seq_no,total_seq_no,cpu_avg,cpu_max,mem_avg,mem_max" --file 路径名\resultDay1.csv

mongoimport -d alibaba_2018_csv -c usageDay2 --type csv --fields "machine_id,time_stamp,cpu_util_percent,mem_util_percent,mem_gps,mpki,net_in,net_out,disk_io_percent,warning" --file 路径名\usageflag2.csv
```
***
### 命令行执行

```shell
# install dependencies
npm install
```

```shell
# Start the back-end server
npm run start
```

```shell
# Start the front-end server
npm run dev
```

***

