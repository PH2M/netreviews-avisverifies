var config = {
    map: {
        '*': {
            "netreviews": "Netreviews_Avisverifies/js/avisverifies",
			"netreviewshelpful": "Netreviews_Avisverifies/js/netreviewsHelpful",
			"fingerprint2": "Netreviews_Avisverifies/js/fingerprint2.min",
			"carousel": "Netreviews_Avisverifies/js/carousel",
            "widgetfloat": "Netreviews_Avisverifies/js/widgetfloat"
        }
    },
    config: {
        mixins : {
            'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                'Netreviews_Avisverifies/js/model/shipping-save-processor/payload-extender-mixin': true
            }
        }
    }
};