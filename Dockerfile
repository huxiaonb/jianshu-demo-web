# 使用两阶段编译
# 第一阶段builder用的镜像
FROM node:16.15.1-alpine as builder
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && apk update && apk add tzdata ca-certificates && apk add curl

# 用npm执行编译命令
ADD ./ /data/build
# RUN npm install -g npm
RUN cd /data/build && npm ci && npm run build

# 正式image用的基础镜像
FROM nginx:1.17.6-alpine

# 从上一阶段拷贝编译结果到第二阶段
COPY --from=builder /data/build/dist /data/apps/fe/dist
COPY env/production/nginx.conf /etc/nginx/nginx.conf

# 默认暴露8000端口，在env/production/nginx.conf里面已经定义了
EXPOSE 8000
