CREATE DATABASE IF NOT EXISTS chatda;

use chatda;

CREATE TABLE IF NOT EXISTS `냉장고` (
    `제품 코드` VARCHAR(255) NOT NULL,
    `제품명` VARCHAR(255) NULL,
    `가로` VARCHAR(255) NULL,
    `높이` VARCHAR(255) NULL,
    `깊이` VARCHAR(255) NULL,
    `제품 타입` VARCHAR(255) NULL,
    `무게` VARCHAR(255) NULL,
    `전체 용량` VARCHAR(255) NULL,
    `냉장실 용량` VARCHAR(255) NULL,
    `냉동실 용량` VARCHAR(255) NULL,
    `맞춤보관실 용량` VARCHAR(255) NULL,
    `소비효율등급` VARCHAR(255) NULL,
    `소비 전력` VARCHAR(255) NULL,
    `설명` TEXT NULL,
    PRIMARY KEY (`제품 코드`)
);

INSERT IGNORE INTO `냉장고` (
    `제품 코드`, `제품명`, `가로`, `높이`, `깊이`, `제품 타입`, `무게`, `전체 용량`, `냉장실 용량`, `냉동실 용량`, `맞춤보관실 용량`, `소비효율등급`, `소비 전력`, `설명`
) VALUES (
    'RF85C90D2AP', 'BESPOKE 냉장고 4도어 875 L', '912 mm', '1,853 mm', '930 mm', 'BESPOKE 냉장고 4도어', '131 kg', '875 ℓ', '522 ℓ', '177 ℓ', '176 ℓ', '2등급', '55.9 kWh/월', '중효율, 가벼운 디자인의 최신형 냉장고입니다.'
), (
    'RF85C90D1AP', 'BESPOKE 냉장고 4도어 875 L', '912 mm', '1,853 mm', '930 mm', 'BESPOKE 냉장고 4도어', '144 kg', '875 ℓ', '522 ℓ', '177 ℓ', '176 ℓ', '1등급', '43.0 kWh/월', '고효율, 저소음 디자인의 최신형 냉장고입니다.'
);