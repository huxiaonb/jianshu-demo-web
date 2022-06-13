# 使用两阶段编译
# 第一阶段builder用的镜像
FROM node:16.15.1-alpine as builder

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
EXPOSE 8088 80 443 8000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
