CREATE TABLE `Admin` (
  `id` int,
  `Email` str,
  `Moblie_no` int,
  `Password` str,
  `Name` str,
  `Super_admin` varchar(255)
);

CREATE TABLE `User` (
  `user_id` int,
  `Name` str,
  `username` str,
  `Moblie_no` int,
  `email` str,
  `password` str,
  `location` long_lat,
  `created_at` datetime,
  `profile_pic` img,
  `gender` bool,
  `is_active` bool,
  `last_active` datetime,
  `DOB` datetime,
  `bio` str,
  `last_update` int
);

CREATE TABLE `location` (
  `loc_id` int,
  `location` long_lat,
  `user_id` int,
  `date_and_time` datetime
);

CREATE TABLE `Post` (
  `post_id` int,
  `user_id` int,
  `URL` str COMMENT 'not mandatory',
  `post_type` type COMMENT 'mp3, mp4 or whatever',
  `content` txt COMMENT 'just text',
  `timestamp` datetime,
  `access` bool,
  `modified_on` bool,
  `caption` str,
  `tag_list` str,
  `loc_id` int
);

CREATE TABLE `like` (
  `id` int,
  `post_id` int,
  `user_id` int,
  `count` int
);

CREATE TABLE `Comments` (
  `id` int,
  `post_id` int,
  `user_id` int,
  `content` str,
  `timestamp` datetime
);

CREATE TABLE `Message` (
  `msg_id` int,
  `user_id` int,
  `reciver_id` int,
  `message` str,
  `media_type` doc,
  `timestamp` datetime
);

CREATE TABLE `Group_message` (
  `g_id` int,
  `message` str,
  `media_type` doc,
  `group_id` int
);

CREATE TABLE `Group` (
  `group_id` int,
  `members` user_id
);

CREATE TABLE `Device` (
  `device_id` int,
  `user_id` int,
  `device_list` int,
  `ip_add` int,
  `loc_id` int,
  `user_logged` bool
);

CREATE TABLE `Post_Analytics` (
  `analytics_id` int,
  `post_id` int,
  `reach` int,
  `likes` int,
  `comments` str,
  `location` long_lat
);

CREATE TABLE `Profile_analytics` (
  `analytics_id` int,
  `user_id` int,
  `reach` int,
  `likes` int,
  `comments` str,
  `location` long_lat
);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `location` (`loc_id`);

ALTER TABLE `location` ADD FOREIGN KEY (`loc_id`) REFERENCES `Device` (`loc_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Device` (`user_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `location` (`user_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Post` (`user_id`);

ALTER TABLE `location` ADD FOREIGN KEY (`loc_id`) REFERENCES `Post` (`loc_id`);

ALTER TABLE `Post` ADD FOREIGN KEY (`post_id`) REFERENCES `like` (`post_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `like` (`user_id`);

ALTER TABLE `Post` ADD FOREIGN KEY (`post_id`) REFERENCES `Comments` (`post_id`);

ALTER TABLE `Group` ADD FOREIGN KEY (`members`) REFERENCES `Group_message` (`group_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Message` (`user_id`);

ALTER TABLE `Post` ADD FOREIGN KEY (`post_id`) REFERENCES `Post_Analytics` (`post_id`);

ALTER TABLE `User` ADD FOREIGN KEY (`user_id`) REFERENCES `Profile_analytics` (`user_id`);
