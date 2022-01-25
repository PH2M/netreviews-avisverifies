<?php
namespace Netreviews\Avisverifies\Observer;

use Magento\Framework\Event\ObserverInterface;

class SaveCustomFieldsInOrder implements \Magento\Framework\Event\ObserverInterface
{
    protected $_logger;

    /**
     * ReviewsAPI constructor.
     * @param LoggerInterface $logger
     */
    public function __construct() {
        $logger = \Magento\Framework\App\ObjectManager::getInstance()->get(\Psr\Log\LoggerInterface::class);
        $this->_logger = $logger;
    }

    public function execute(\Magento\Framework\Event\Observer $observer) {
        try {
            $order = $observer->getEvent()->getOrder();
            $quote = $observer->getEvent()->getQuote();
            $send_review = $quote->getAvSendReview();

            $order->setData('av_send_review', $send_review);

            if ($send_review == 0 && is_null($send_review) == false) {
                // Marcar como pedido ya recuperado.
                $order->setData('av_flag', NULL);
                $order->setData('av_horodate_get', time());
            } else {
                // Sí la recupero;
            }
            return $this;
        } catch (\Exception $e) {
            $this->_logger->critical($e->getMessage());
        }
    }
}