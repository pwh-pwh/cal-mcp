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

server.addTool({
    name: "getDateByTimestamp",
    description: "Convert the provided timestamp to date format",
    parameters: z.object({
        ts: z.number(),
    }),
    execute: async (args) => {
        return String(getDateByTimestamp(args.ts));
    },
});

server.addTool({
    name: "batchGetDateByTimestamp",
    description: "Batch convert the provided list of timestamps to date format, used for processing multiple timestamps",
    parameters: z.object({
        tsList: z.array(z.number()),
    }),
    execute: async (args) => {
        let result = batchGetDateByTimestamp(args.tsList);
        let ct = result.map(item => ({
            type: "text",
            text: item
        }))
        return {
            content: [
              { type: "text", text: "First message" },
              { type: "text", text: "Second message" },
            ],
          };
        // return String(batchGetDateByTimestamp(args.tsList));
    },
});

function calculate(expression: string): number {
    const parser = new Parser();
    return parser.evaluate(expression);
}

function getDateByTimestamp(ts: number) {
    return new Date(ts).toLocaleString()
}

function batchGetDateByTimestamp(tsList: number[]) {
    return tsList.map(timestamp => getDateByTimestamp(timestamp));
}

server.start({
    transportType: "stdio",
});