join = ("SELECT * FROM `refridgerators`"
        " JOIN `refridgerator_mores` ON `refridgerators`.`제품_코드` = `refridgerator_mores`.`제품_코드`"
        " JOIN `refridgerator_reviews` ON `refridgerators`.`제품_코드` = `refridgerator_reviews`.`제품_코드`"
        " JOIN `refridgerator_details` ON `refridgerators`.`제품_코드` = `refridgerator_details`.`제품_코드`"
        " JOIN `refridgerator_prices` ON `refridgerators`.`제품_코드` = `refridgerator_prices`.`제품_코드`")
