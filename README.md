# Pro Dev Project

This is the final project of a 17 week Bootcamp with Moringa School. We decided take the creative route and build a Studio Booking Platform called Studio Sesh.

Studio Sesh exists to connect the music artists to music production studios and photo-lovers to photo studios.

## Screenshots

![App Screenshot](https://am3pap006files.storage.live.com/y4mf6G3d2IGnf5bbpXD6cjdsJVXubx9b1ZyXAQUXkBA6hribmBn-lOkzlvUZxhG2qkFuJe4XdM_5n5sEjFE4ikhgctwN8evG4c6C13cZbp3X4sX6bUZowfXzJo1a0xAfJL_hOPgu9ZO8g1vP7y-NJvvyZxDy8OOCPyjnZRtgtKdhC8ar75tmETEkJvnd1-FQrmz?width=1920&height=1080&cropmode=none)

![App Screenshot](https://am3pap006files.storage.live.com/y4m_DHcmlSbDfPN61yktzm04blmnd6TPxIXqICYTRrNlCUBkYhpQjZF279yOpTDjuyc6KYJ9cVJRa9Lv4VtoQ3KqiJWNq2X1PL6HlS7gkAK_vB7b4u_h-f24_XgOn4kBHqtTvG2g5IY1BLMlnFQKQwnC87yW-cvnr6FMSxZa0YZ0b5gkSD_5Qobe-532IZlFhLd?width=1920&height=1080&cropmode=none)

## API Reference

### Authentication Routes

#### Login User

```http
  POST 'api/user/login'
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `token`   | `string` | **Required**. JWT Authorization Token |

| Body       | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `username` | `string` | **Required**. Your account username |
| `password` | `string` | **Required**. Your account password |

#### Register User

```http
  POST 'api/user/register'
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `token`   | `string` | **Required**. JWT Authorization Token |

| Body        | Type     | Description                                               |
| :---------- | :------- | :-------------------------------------------------------- |
| `username`  | `string` | **Required**. Account username                            |
| `email`     | `string` | **Required**. Account password                            |
| `user_type` | `string` | **Required**. Account type (1=studio_user, 2=client_user) |
| `password`  | `string` | **Required**. Account password                            |
| `token`     | `string` | **Required**. JWT Authorization Token                     |

### Client Routes

#### Create Profile

```http
  POST 'api/client/profile/'
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `token`   | `string` | **Required**. JWT Authorization Token |

| Body          | Type     | Description                            |
| :------------ | :------- | :------------------------------------- |
| `creative_id` | `string` | **Required**. JWT Authorization Token  |
| `avatar`      | `file`   | **Required**. Image file (\*\*/images) |
| `bio`         | `text`   | **Required**. Profile bio              |
| `token`       | `string` | **Required**. JWT Authorization Token  |

#### Get Profile

```http
  GET 'api/client/profile/<profile_id>'
```

| Parameter    | Type      | Description                           |
| :----------- | :-------- | :------------------------------------ |
| `profile_id` | `integer` | **Required**. Profile ID              |
| `token`      | `string`  | **Required**. JWT Authorization Token |

#### Create Booking

```http
  POST 'api/client-user/create-booking'
```

| Parameter   | Type      | Description                           |
| :---------- | :-------- | :------------------------------------ |
| `token`     | `string`  | **Required**. JWT Authorization Token |
| `studio_id` | `integer` | **Required**. Id of item to fetch     |

### Studio Routes

#### Get all items

```http
  GET 'api/client-user/profile/<int:profile_id>'
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `token`   | `string` | **Required**. JWT Authorization Token |

## Tech Stack

**Client:** Angular, HTML, CSS, Bootstrap

**Server:** Django

## Demo

Insert gif or link to demo

## Authors

- [@Caleb Mbugua](https://www.github.com/g90tony)
- [@Ether Kirui](https://github.com/Eccie-K)
- [@David Msyoka](https://github.com/Msyoka)
- [@Joshua Kimani](https://github.com/JKimani77)
- [@Mark Kariuki](https://github.com/markkariuki)
- [@Michelle Wangechik](https://github.com/wangechimk)
- [@Melissa Wangui](https://github.com/melissa-koi)
