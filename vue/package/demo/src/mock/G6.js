const data1 = {
    // 点集
    nodes: [
        {
            id: 'node1', // 节点的唯一标识
            x: 100, // 节点横坐标
            y: 200, // 节点纵坐标
            label: '起始点', // 节点文本
        },
        {
            id: 'node2',
            x: 300,
            y: 200,
            label: '目标点',
        },
    ],
    // 边集
    edges: [
        // 表示一条从 node1 节点连接到 node2 节点的边
        {
            source: 'node1', // 起始点 id
            target: 'node2', // 目标点 id
            label: '我是连线', // 边的文本
        },
    ],
};

const flow = {
    data: [
        {
          "id": "1338766020737441793",
          "createTime": "2020-12-15 16:41:06",
          "updateTime": null,
          "eventId": null,
          "pid": null,
          "eventType": null,
          "eventTypeName": null,
          "eventTitle": null,
          "eventOccurTime": null,
          "eventOccurAddr": null,
          "eventCategoryNo": null,
          "eventDutyDeptNo": null,
          "eventCallPhone": null,
          "eventPersonName": null,
          "recvDeptNo": "440600000000",
          "recvDeptName": "佛山市公安局",
          "isDutyDept": null,
          "visibleScope": null,
          "visibleScopeName": null,
          "visibleUserNos": null,
          "visibleRoleNos": null,
          "status": "FINISHED",
          "statusName": "已完成",
          "refineStatus": "NONE",
          "refineStatusName": "不细化",
          "sendDeptNo": null,
          "sendDeptName": null,
          "sendUserNo": null,
          "sendUserName": null,
          "advice": null,
          "cancelReason": null,
          "signTimeLimit": null,
          "replyTimeLimit": null,
          "finishTimeLimit": null,
          "signTime": "2020-12-15 16:41:06",
          "signUserName": null,
          "replyTime": null,
          "replyUserName": null,
          "finishTime": null,
          "finishUserName": null,
          "dutyDept": null
        },
        {
          "id": "1339385280761393153",
          "createTime": "2020-12-17 09:41:50",
          "updateTime": null,
          "eventId": null,
          "pid": '1338766020737441793',
          "eventType": null,
          "eventTypeName": null,
          "eventTitle": null,
          "eventOccurTime": null,
          "eventOccurAddr": null,
          "eventCategoryNo": null,
          "eventDutyDeptNo": null,
          "eventCallPhone": null,
          "eventPersonName": null,
          "recvDeptNo": "440600020100",
          "recvDeptName": "政治处综合科",
          "isDutyDept": null,
          "visibleScope": null,
          "visibleScopeName": null,
          "visibleUserNos": null,
          "visibleRoleNos": null,
          "status": "TO_SIGN",
          "statusName": "待签收",
          "refineStatus": "TO_INPUT",
          "refineStatusName": "待录",
          "sendDeptNo": null,
          "sendDeptName": null,
          "sendUserNo": null,
          "sendUserName": null,
          "advice": null,
          "cancelReason": null,
          "signTimeLimit": null,
          "replyTimeLimit": null,
          "finishTimeLimit": null,
          "signTime": null,
          "signUserName": null,
          "replyTime": null,
          "replyUserName": null,
          "finishTime": null,
          "finishUserName": null,
          "dutyDept": null
        },
        {
          "id": "1339385624526548994",
          "createTime": "2020-12-17 09:43:12",
          "updateTime": null,
          "eventId": null,
          "pid": '1338766020737441793',
          "eventType": null,
          "eventTypeName": null,
          "eventTitle": null,
          "eventOccurTime": null,
          "eventOccurAddr": null,
          "eventCategoryNo": null,
          "eventDutyDeptNo": null,
          "eventCallPhone": null,
          "eventPersonName": null,
          "recvDeptNo": "440606500000",
          "recvDeptName": "顺德区局大良派出所",
          "isDutyDept": null,
          "visibleScope": null,
          "visibleScopeName": null,
          "visibleUserNos": null,
          "visibleRoleNos": null,
          "status": "TO_FINISH",
          "statusName": "待完成",
          "refineStatus": "TO_INPUT",
          "refineStatusName": "待录",
          "sendDeptNo": null,
          "sendDeptName": null,
          "sendUserNo": null,
          "sendUserName": null,
          "advice": null,
          "cancelReason": null,
          "signTimeLimit": null,
          "replyTimeLimit": null,
          "finishTimeLimit": null,
          "signTime": "2020-12-17 09:45:30",
          "signUserName": null,
          "replyTime": null,
          "replyUserName": null,
          "finishTime": null,
          "finishUserName": null,
          "dutyDept": null
        },
        {
          "id": "1339568943834820610",
          "createTime": "2020-12-17 21:51:38",
          "updateTime": null,
          "eventId": null,
          "pid": '1339385624526548994',
          "eventType": null,
          "eventTypeName": null,
          "eventTitle": null,
          "eventOccurTime": null,
          "eventOccurAddr": null,
          "eventCategoryNo": null,
          "eventDutyDeptNo": null,
          "eventCallPhone": null,
          "eventPersonName": null,
          "recvDeptNo": "440600983503",
          "recvDeptName": "容桂消防中队",
          "isDutyDept": null,
          "visibleScope": null,
          "visibleScopeName": null,
          "visibleUserNos": null,
          "visibleRoleNos": null,
          "status": "TO_SIGN",
          "statusName": "待签收",
          "refineStatus": "TO_INPUT",
          "refineStatusName": "待录",
          "sendDeptNo": null,
          "sendDeptName": null,
          "sendUserNo": null,
          "sendUserName": null,
          "advice": null,
          "cancelReason": null,
          "signTimeLimit": null,
          "replyTimeLimit": null,
          "finishTimeLimit": null,
          "signTime": null,
          "signUserName": null,
          "replyTime": null,
          "replyUserName": null,
          "finishTime": null,
          "finishUserName": null,
          "dutyDept": null
        },
        {
          "id": "1339569718392745986",
          "createTime": "2020-12-17 21:54:43",
          "updateTime": null,
          "eventId": null,
          "pid": '1339385624526548994',
          "eventType": null,
          "eventTypeName": null,
          "eventTitle": null,
          "eventOccurTime": null,
          "eventOccurAddr": null,
          "eventCategoryNo": null,
          "eventDutyDeptNo": null,
          "eventCallPhone": null,
          "eventPersonName": null,
          "recvDeptNo": "440600020200",
          "recvDeptName": "政治处人事科",
          "isDutyDept": null,
          "visibleScope": null,
          "visibleScopeName": null,
          "visibleUserNos": null,
          "visibleRoleNos": null,
          "status": "TO_SIGN",
          "statusName": "待签收",
          "refineStatus": "TO_INPUT",
          "refineStatusName": "待录",
          "sendDeptNo": null,
          "sendDeptName": null,
          "sendUserNo": null,
          "sendUserName": null,
          "advice": null,
          "cancelReason": null,
          "signTimeLimit": null,
          "replyTimeLimit": null,
          "finishTimeLimit": null,
          "signTime": null,
          "signUserName": null,
          "replyTime": null,
          "replyUserName": null,
          "finishTime": null,
          "finishUserName": null,
          "dutyDept": null
        },
        {
          "id": "1339572547564040194",
          "createTime": "2020-12-17 22:05:57",
          "updateTime": null,
          "eventId": null,
          "pid": '1339385624526548994',
          "eventType": null,
          "eventTypeName": null,
          "eventTitle": null,
          "eventOccurTime": null,
          "eventOccurAddr": null,
          "eventCategoryNo": null,
          "eventDutyDeptNo": null,
          "eventCallPhone": null,
          "eventPersonName": null,
          "recvDeptNo": "440600020300",
          "recvDeptName": "政治处教育培训科",
          "isDutyDept": null,
          "visibleScope": null,
          "visibleScopeName": null,
          "visibleUserNos": null,
          "visibleRoleNos": null,
          "status": "TO_SIGN",
          "statusName": "待签收",
          "refineStatus": "TO_INPUT",
          "refineStatusName": "待录",
          "sendDeptNo": null,
          "sendDeptName": null,
          "sendUserNo": null,
          "sendUserName": null,
          "advice": null,
          "cancelReason": null,
          "signTimeLimit": null,
          "replyTimeLimit": null,
          "finishTimeLimit": null,
          "signTime": null,
          "signUserName": null,
          "replyTime": null,
          "replyUserName": null,
          "finishTime": null,
          "finishUserName": null,
          "dutyDept": null
        },
        {
          "id": "1339572869661421569",
          "createTime": "2020-12-17 22:07:14",
          "updateTime": null,
          "eventId": null,
          "pid": '1339572547564040194',
          "eventType": null,
          "eventTypeName": null,
          "eventTitle": null,
          "eventOccurTime": null,
          "eventOccurAddr": null,
          "eventCategoryNo": null,
          "eventDutyDeptNo": null,
          "eventCallPhone": null,
          "eventPersonName": null,
          "recvDeptNo": "440600020500",
          "recvDeptName": "政治处离退休人员管理科",
          "isDutyDept": null,
          "visibleScope": null,
          "visibleScopeName": null,
          "visibleUserNos": null,
          "visibleRoleNos": null,
          "status": "TO_SIGN",
          "statusName": "待签收",
          "refineStatus": "TO_INPUT",
          "refineStatusName": "待录",
          "sendDeptNo": null,
          "sendDeptName": null,
          "sendUserNo": null,
          "sendUserName": null,
          "advice": null,
          "cancelReason": null,
          "signTimeLimit": null,
          "replyTimeLimit": null,
          "finishTimeLimit": null,
          "signTime": null,
          "signUserName": null,
          "replyTime": null,
          "replyUserName": null,
          "finishTime": null,
          "finishUserName": null,
          "dutyDept": null
        }
      ]
}

const data = {
    data1,
    flow
}

export default data;