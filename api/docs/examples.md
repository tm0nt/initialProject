#### Auth Facebook

<details>
 <summary><code>GET</code> <code><b>/auth/facebook</b></code></summary>

##### Parameters

> | name      |  type     | data type               | description                           |
> |-----------|-----------|-------------------------|---------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A                                   |


##### Responses

> | http code     | content-type                      | response                            |
> |---------------|-----------------------------------|-------------------------------------|
> | `302`         | `text/html;charset=utf-8`         | Redirects to Facebook login page    |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://${host}/auth/facebook
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/auth/facebook/callback</b></code></summary>

##### Parameters

> | name      |  type     | data type               | description                           |
> |-----------|-----------|-------------------------|---------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A                                   |


##### Responses

> | http code     | content-type                      | response                            |
> |---------------|-----------------------------------|-------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | Success message                     |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://${host}/auth/facebook/callback
> ```

</details>

#### Auth Google

<details>
 <summary><code>GET</code> <code><b>/auth/google</b></code></summary>

##### Parameters

> | name      |  type     | data type               | description                           |
> |-----------|-----------|-------------------------|---------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A                                   |


##### Responses

> | http code     | content-type                      | response                            |
> |---------------|-----------------------------------|-------------------------------------|
> | `302`         | `text/html;charset=utf-8`         | Redirects to Google login page      |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://${host}/auth/google
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/auth/google/callback</b></code></summary>

##### Parameters

> | name      |  type     | data type               | description                           |
> |-----------|-----------|-------------------------|---------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A                                   |


##### Responses

> | http code     | content-type                      | response                            |
> |---------------|-----------------------------------|-------------------------------------|
> | `200`         | `text/html;charset=utf-8`         | Success message                     |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://${host}/auth/google/callback
> ```

</details>
