项目启动说明
===
***
>to: 勇哥
from: 阮劭伦

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

### 不同组件切换：
  通过切换在src下的Vue.js入口文件中挂载的组件名称，来切换要在浏览器查看的视图
```javascript
<template>
<div>
        <!-- <fdtest></fdtest> -->//不想观察，即可套上注释
        <!-- <linec></linec> -->//不想观察，即可套上注释
        <!-- <calendarGraph></calendarGraph> -->//不想观察，即可套上注释
        <!-- <sunburst></sunburst> -->//不想观察，即可套上注释

        <test></test>//想要观察该视图，直接解除注释

        <!-- <hist></hist> -->//不想观察，即可套上注释


    </div>
</template>
```

***

### 数据库连接
实验所用的数据我放在了压缩包里，是用mongoDB装的
由于导入数据库时数据字段不同会导致项目运行时找不到数据，所以字段名必须一致
勇哥我将导入数据库时的命令行语句写出来，到时候你直接复制我的命令就可以了(电脑中有mongoDB的前提下)

```shell
//导入数据(E:\lucky_data\test_monitor\是我存放数据文件的文件夹，到时候可以换成实际的文件夹)
mongoimport -d alibaba_2018_csv -c machine_meta --type csv --fields "machine_id,time_stamp,disaster_level_1,disaster_level_2,cpu_num,mem_size,status" --file E:\lucky_data\test_monitor\machine_meta.csv

mongoimport -d alibaba_2018_csv -c resultDay1 --type csv --fields "inst_name,task_name,job_name,task_type,status,start_time,end_time,machine_id,seq_no,total_seq_no,cpu_avg,cpu_max,mem_avg,mem_max" --file E:\lucky_data\test_monitor\resultDay1.csv

mongoimport -d alibaba_2018_csv -c usageDay2 --type csv --fields "machine_id,time_stamp,cpu_util_percent,mem_util_percent,mem_gps,mpki,net_in,net_out,disk_io_percent,warning" --file E:\lucky_data\test_monitor\usageflag2.csv
```

<center><font color='steelblue'>勇哥我能想到的大概就是这些，有啥问题你直接微信私聊我就行</font></center>