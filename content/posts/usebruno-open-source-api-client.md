---
title: 'Bruno: Open Source API Client'
description: 'A lightweight API client alternative to Postman'
event: 'usebruno_open_source_api_client'
image: ''
draft: false
published: '2024-05-18'
---

Assalamualaikum!

[Bruno](https://www.usebruno.com/), an inventive open-source API client, has has gained popularity in recent months. People keep talking about it since last year in Twitter, then I'd give it a try and I would say it is an amazing tool.

Bruno intended to revolutionize the status quo represented by Postman, Insomnia, and similar tools. It's goal is to offer a quick and Git-friendly API client so that developers can work together on API collections by storing them directly in a user's filesystem folder. This approach allows managing and working together on API collections using any version control system, like Git.

## Features

It feels like a normal API client like Postman BUT with privacy and super power! I'll explain further down the features that I think most outstanding feature.

### 1. The `.bru` file

With Bruno it came with `.bru` extension file so we can edit API collection directly in preferred code editor. As we can see example below, there's a few format in order to create an API request to get list of addresses; meta, request, auth, assert and tests.

![Dot bru file introduction](/images/posts/bruno-bru-dot-file.png)

#### Meta

```bash
meta {
  name: Get list of addresses
  type: http
  seq: 1
}
```

The **meta** format is to describe the HTTP request for a particular `.bru` file. Example above, have three attributes which are:

1. name: Name of the API request.
2. type: Type of API request, currently only support HTTP and GraphQL.
3. seq: Sequence of the `.bru` inside of a folder.

#### Request

```bash
get {
  url: {{rest_url}}/api/addresses
  body: none
  auth: bearer
}
```

Another format is **get** and this is actually the HTTP method, we can change it to supported HTTP method such as **post**, **patch** or **delete**. This part consist of:
1. url: The API url with `{{rest_url}}` is the variable we set for particular environment.
2. body: The body of HTTP request, for this case is none.
3. auth: Authentication for this API url as selected is bearer token, currently only support AWS Sig V4, Basic Auth, Bearer Token, Digest Auth and OAuth 2.0.

If we wanna to use different HTTP method, just simply change like this:

```bash
// POST Method
post {
  url: {{rest_url}}/api/addresses
  body: none
  auth: bearer
}

// PATCH Method
patch {
  url: {{rest_url}}/api/addresses
  body: none
  auth: bearer
}

// DELETE Method
delete {
  url: {{rest_url}}/api/addresses
  body: none
  auth: bearer
}
```

How about request body? If only need a simple input, I recommend using `json` type will be good enough and we need specify the `json` type body inside the request format.

```bash
post {
  url: {{rest_url}}/api/addresses
  body: json
  auth: bearer
}

body:json {
    {
        "name": "Home",
        "address_1": "Jalan Persiaran Junjung",
        "address_2": "Taman Melati",
        "postcode": "47650",
        "is_primary": true
    }
}
```

However, if file attachment is needed, that is different case. We will need to use `multipart-form` type. With this, we can use `@file()` provided by Bruno in which it will locate local file using given path.


```bash
post {
  url: {{rest_url}}/api/addresses
  body: multipart-form
  auth: bearer
}

body:multipart-form {
  name: Random name
  logo: @file(./images.png)
}
```

#### Authentication

```bash
auth:bearer {
  token: {{token}}
}
```

For authentication I used Bearer Token with `{{token}}` variable, this token value must be set from login API. I will explain further about Asserts and Test in the next section, feel free to skip it.

### 2. Asserts and Tests

Bruno support automation test script in order to determine whether the response is meet expectations. For simple test, we can assertions but for complex tests, we can write test scripts. They using [chai](https://www.chaijs.com/) a BDD / TDD assertion library for [node](https://nodejs.org/en) which similar to [PestPHP](https://pestphp.com/) for PHP, and we can have multiple test in a single `.bru` file.

#### Assert

Example below, once the request is trigger and response will test with assert whether the HTTP code return as 200 and the `data` inside response body is defined.

```bash
assert {
  res.status: eq 200
  res.body.data: isDefined
}
```

#### Tests

For more complex test, let say we want to verify the `data` inside response body is return the correct format, we can use `expect()` interface and we chain together natural language assertions. In other word, we're expect the data return to be a number or a string.

```bash
tests {
  test("verify response body structure", function() {
    const body = res.getBody();

    let datas = body.data
    for(let data of datas) {
      expect(data.id).to.be.a('number');
      expect(data.userId).to.be.a('number');
      expect(data.name).to.be.a('string');
      expect(data.address1).to.be.a('string');
      expect(data.postcode).to.be.a('string');
      expect(data.state).to.be.a('string');
      expect(data.stateId).to.be.a('number');
      expect(data.isPrimary).to.be.a('boolean');
      expect(data.createdAt).to.be.a('string');
      expect(data.updatedAt).to.be.a('string');
    }
  });
}
```

#### Result

For each test description have green tick meaning the test is passed, some goes to assertions. Otherwise, if the test or assertions are failed, then the red cross will appear.

![Bruno Asserts and Tests](/images/posts/bruno-asserts-test.png)

### 3. Chrome Console

Can use Chrome Developer Tools to debug the request! Just simply click, three dots on left top corner and click 'Chrome Console'. It have Elements, Console, Network tab same with the Google Chrome!

![Bruno Chrome Console](/images/posts/bruno-chrome-console.png)

We can debug the request using the Custom Script and `console.log` at the Pre Request or Post Response section. Then the Console tab will appear the result.

![Bruno Console Log](/images/posts/bruno-console-log.png)

## Downside

This is just basic example of using Bruno. Of all good things, there's a few thing I need to highlight since Bruno is still new:

1. Sometime it's buggy.
2. Doesn't have load test feature.
3. Documentation not updated.

In a nutshell.

Nevertheless, I'm not complaining much thanks to its totally offline, Git-friendly, and no-cloud-sync capabilities. Bruno has attracted a growing user base by responding to bugs and feature requests, the project demonstrates its dedication to open-source ideals and ongoing improvement, which guarantees that Bruno is developing to meet the needs of developers. Support them by subscribe the [Gold Edition](https://www.usebruno.com/pricing).

See you soon!