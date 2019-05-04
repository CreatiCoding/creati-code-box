show create table USER;
TRUNCATE TABLE USER;
DROP TABLE USER;
CREATE TABLE `USER` (
  `user_idx` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'index',
  `id` varchar(128) CHARACTER SET utf8 NOT NULL COMMENT 'id',
  `email` varchar(256) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `name` varchar(64) CHARACTER SET utf8 NOT NULL DEFAULT '' COMMENT 'name',
  `role` varchar(16) CHARACTER SET utf8 NOT NULL DEFAULT 'guest' COMMENT 'role',
  `password` varchar(512) CHARACTER SET utf8 DEFAULT NULL COMMENT 'password',
  `password_salt` varchar(64) CHARACTER SET utf8 DEFAULT NULL COMMENT 'salt',
  `status_code` enum('activate','deactivate','block') NOT NULL DEFAULT 'activate',
  PRIMARY KEY (`user_idx`),
  UNIQUE KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
insert into USER (id) values ('asd');