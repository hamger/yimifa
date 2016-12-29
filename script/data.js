var data = [{
        admin_uid: "0",
        bid_price: "998",
        buyer_frozen_price: "0",
        buyer_uid: "0",
        create_datetime: "2016-12-24 11:48:14",
        domain: "ymff.com",
        domain_id: "9",
        end: "2天22小时",
        end_datetime: "2016-12-31 11:41:04",
        frozen_price: "0",
        meaning: "腾讯域名",
        price: "14500元",
        type: "四声"
    },

    {
        admin_uid: "1",
        bid_price: "998",
        buyer_frozen_price: "0",
        buyer_uid: "0",
        create_datetime: "2016-12-24 11:48:14",
        domain: "ymdk.com",
        domain_id: "9",
        end: "2天22小时",
        end_datetime: "2016-12-31 11:41:04",
        frozen_price: "0",
        meaning: "腾讯域名",
        price: "0",
        type: "四字母"
    }, {
        admin_uid: "2",
        bid_price: "998",
        buyer_frozen_price: "0",
        buyer_uid: "0",
        create_datetime: "2016-12-24 11:48:14",
        domain: "ymf.com",
        domain_id: "9",
        end: "2天22小时",
        end_datetime: "2016-12-31 11:41:04",
        frozen_price: "0",
        meaning: "腾讯域名",
        price: "0",
        type: "三声"
    },

    {
        admin_uid: "3",
        bid_price: "998",
        buyer_frozen_price: "0",
        buyer_uid: "0",
        create_datetime: "2016-12-24 11:48:14",
        domain: "ymk.com",
        domain_id: "9",
        end: "2天22小时",
        end_datetime: "2016-12-31 11:41:04",
        frozen_price: "0",
        meaning: "腾讯域名",
        price: "0",
        type: "三字母"
    },

]
$('.sheet').html("<a class='domain'>"+data[0].domain+"</a>");
$(".domain").append("<span class='meaning' style='color: #47C4EB'>"+data[0].meaning+"</span>");
$(".meaning").append("<span class='price'>当前价格<span style='color:#EC5A0F;'>"+data[0].price+"</span></span>");




