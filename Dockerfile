FROM oven/bun:latest


WORKDIR /app


COPY . .

RUN bun install


# 运行脚本
CMD ["bun", "run", "index.ts"]