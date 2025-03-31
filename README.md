# Cal Server
[![smithery badge](https://smithery.ai/badge/@pwh-pwh/cal-mcp)](https://smithery.ai/server/@pwh-pwh/cal-mcp)

## 项目简介

`Cal Server` 是一个基于 `FastMCP` 框架构建的简单数学表达式计算服务，使用 Bun 运行时环境。它利用 `expr-eval` 库解析和计算用户输入的数学表达式，并通过标准输入输出（stdio）与外界交互。该项目旨在提供一个轻量、高效的计算工具，支持基本数学运算和内置常量。

## 功能

- **表达式计算**：支持用户输入数学表达式并返回计算结果。
- **内置常量**：
    - `E`：Bun 环境中的 `Math.E`。
    - `PI`：Bun 环境中的 `Math.PI`。
    - `true`：逻辑真值。
    - `false`：逻辑假值。
- **工具名称**：`cal`。
- **参数**：接受一个字符串类型的数学表达式（`exp`）。

## 依赖

- `fastmcp`：用于构建 MCP 服务。
- `expr-eval`：用于解析和计算数学表达式。
- `zod`：用于参数验证。

## 前置条件

- 确保已安装 [Bun](https://bun.sh/) 运行时（推荐最新版本）。

## 安装
### Installing via Smithery

To install cal-mcp for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@pwh-pwh/cal-mcp):

```bash
npx -y @smithery/cli install @pwh-pwh/cal-mcp --client claude
```

### mcp客户端配置
```json
"cal-mcp": {
      "name": "计算",
      "description": "",
      "isActive": true,
      "command": "bunx",
      "args": [
        "cal-mcp"
      ]
    }
```

### Manual Installation
1. 克隆项目仓库：
   ```bash
   git clone <仓库地址>
   ```
2. 进入项目目录并安装依赖：
   ```bash
   bun install
   ```

## 使用方法

1. 启动服务：
   ```bash
   bun run index.ts
   ```
   服务将通过标准输入输出（stdio）运行。

2. 输入数学表达式：
    - 示例输入：`2 + 3 * PI`
    - 输出：计算结果（字符串形式）。

3. 支持的表达式示例：
    - 基本运算：`2 + 2` → `4`
    - 使用常量：`PI * 2` → `6.283185307179586`
    - 复杂表达式：`E ^ 2 + 1` → `8.38905609893065`



## 注意事项

- 输入的表达式必须是有效的数学表达式，否则可能抛出错误。
- 服务当前仅支持通过 `stdio` 交互。
- 项目使用 Bun 运行时，确保命令与 Bun 兼容。
