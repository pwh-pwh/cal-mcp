import { Parser } from 'expr-eval';
import { FastMCP } from "fastmcp";
import { z } from "zod";

const server = new FastMCP({
    name: "Cal Server",
    version: "1.0.0",
});

server.addTool({
    name: "cal",
    description: "Use the expr-eval library to evaluate the input mathematical expression and return the result." +
        "\n\nConstant \tDescription\n" +
        "E \tThe value of Math.E from your JavaScript runtime\n" +
        "PI \tThe value of Math.PI from your JavaScript runtime\n" +
        "true \tLogical true value\n" +
        "false \tLogical false value",
    parameters: z.object({
        exp: z.string(),
    }),
    execute: async (args) => {
        return String(calculate(args.exp));
    },
});

function calculate(expression: string): number {
    const parser = new Parser();
    return parser.evaluate(expression);
}

server.start({
    transportType: "stdio",
});