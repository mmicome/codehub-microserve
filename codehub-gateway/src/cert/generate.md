### 1. 生成 ec 算法的私钥，使用 prime256v1 算法，密钥长度 256 位。（强度大于 2048 位的 RSA 密钥）

openssl ecparam -genkey -name prime256v1 -out codehub-private.pem

### 2. 通过密钥生成公钥

openssl ec -in codehub-private.pem -pubout -out codehub-public.pem
