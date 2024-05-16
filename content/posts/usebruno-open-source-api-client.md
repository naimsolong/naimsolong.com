---
title: 'Bruno: Open Source API Client'
description: 'A lightweight API client alternative to Postman'
event: 'usebruno_open_source_api_client'
image: ''
draft: true
published: '2024-05-30'
---

Assalamualaikum!

[Bruno](https://www.usebruno.com/), an inventive open-source API client, has has gained popularity in recent months. People keep talking about it since last year in Twitter, then I'd give it a try and I would say it is an amazing tool.

Bruno intended to revolutionize the status quo represented by Postman, Insomnia, and similar tools. It's goal is to offer a quick and Git-friendly API client so that developers can work together on API collections by storing them directly in a user's filesystem folder. This approach allows managing and working together on API collections using any version control system, like Git.

## Features

It feels like a normal API client like Postman BUT with privacy and super power! I'll explain further down the features that I think most outstanding feature.

### 1. The `.bru` file

With Bruno it came with `.bru` extension file so we can edit API collection directly in your preferred code editor. As you can see example below, there's a few format in order to create an API request to get list of addresses; meta, request, auth, assert and tests.

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

Another format is **get** and this is actually the HTTP method, you can change it to supported HTTP method such as **post**, **patch** or **delete**. This part consist of:
1. url: The API url with `{{rest_url}}` is the variable we set for particular environment.
2. body: The body of HTTP request, for this case is none.
3. auth: Authentication for this API url as selected is bearer token, currently only support AWS Sig V4, Basic Auth, Bearer Token, Digest Auth and OAuth 2.0.

If you wanna to use different HTTP method, just simply change like this:

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

How about request body? If you only need simple input, I recommend using `json` type will be good enough and you'll need specify the `json` type body inside the request format.

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

However, if you needed to attach, that is different case. You'll need to use `multipart-form` type. With this, you can use `@file()` provided by Bruno in which it will locate local file using given path.


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

### 2. Custom scripts

Pre-scripts

Post-scripts

### 3. Asserts and Tests

Asserts is to determince whether the response is meet expectations.

Tests using Chaijs which similar to PestPHP, and can have multiple test in a single `.bru` file.

#### Assert

```bash
assert {
  res.status: eq 200
  res.body.data: isDefined
}
```

#### Tests

```bash
tests {
  test("should be able to return 200 http status", function() {
    expect(res.getStatus()).to.equal(200);
  })
    
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

### 4. Chrome Console

Can use console.log

### 5. CLI

Can run collection through CLI

## Downside

1. Sometime buggy because it's early version.
2. Doesn't have load test feature in which Postman does have limited feature.

In a nutshell.

This is just basic of using Bruno.

Support this by subscribe the Gold Edition.

See you soon!