const z = require("zod");

exports.askSchema = z.object({
    question: z.string().min(3),
    type: z.enum(["db", "business"]).optional()
});
