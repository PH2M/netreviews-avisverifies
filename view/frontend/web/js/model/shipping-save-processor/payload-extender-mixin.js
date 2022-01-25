// Netreviews_Avisverifies/web/js/checkout/model/shipping-save-processor/payload-extender-mixin.js

define(['jquery'], function ($) {
    'use strict';

    return function (originalAction) {
        return function (payload) {
            var sendReviewCheckbox;

            originalAction(payload);

            sendReviewCheckbox = $('[name="custom_attributes[av_send_review]"]');
            if (sendReviewCheckbox.length) {
                payload.addressInformation.extension_attributes = Object.assign(
                    {},
                    payload.addressInformation.extension_attributes,
                    {'av_send_review': sendReviewCheckbox[0].checked === true ? 1 : 0}
                );
            }

            return payload;
        };
    };
});