join = ("SELECT * FROM `refridgerator`"
        " JOIN `refridgerator_mores` ON `refridgerator`.`제품_코드` = `refridgerator_mores`.`제품_코드`"
        " JOIN `refridgerator_reviews` ON `refridgerator`.`제품_코드` = `refridgerator_reviews`.`제품_코드`"
        " JOIN `refridgerator_details` ON `refridgerator`.`제품_코드` = `refridgerator_details`.`제품_코드`"
        " JOIN `refridgerator_prices` ON `refridgerator`.`제품_코드` = `refridgerator_prices`.`제품_코드`")
