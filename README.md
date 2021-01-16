# node_assignment

<h3>End Point</h3>

<h4>Login</h4>
<code> POST http://localhost:8000/api/users/login</code>
<br>
Request Body
<br>
<code>
{
  "username": "",
  "password": ""
}
</code>

<h4>Save Address</h4>
<code> POST http://localhost:8000/api/users/save-address</code>
<br>
Request Body
<br>
<code>
{
    "username": "",
    "address": {
        "city": "",
        "country": ""
    }
}
</code>


<h4>Generate Thumbnail</h4>
<code> POST http://localhost:8000/api/features/create-thumbnail</code>
<br>
Request Body
<br>
<code>
{
    "imageUrl": "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
}
</code>


<h4>Patch Json</h4>
<code> PATCH http://localhost:8000/api/features/patch-object</code>
<br>
Request Body
<br>
<code>
{
    "jsonObject": {
        "baz": "qux",
        "foo": "bar"
    },
    "jsonPatchObject": [
            { "op": "replace", "path": "/baz", "value": "boo" },
            { "op": "add", "path": "/hello", "value": ["world"] },
            { "op": "remove", "path": "/foo" }
    ]
}
</code>
