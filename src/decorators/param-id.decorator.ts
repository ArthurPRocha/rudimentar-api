import { createParamDecorator, ExecutionContext, ParseUUIDPipe } from "@nestjs/common";

export const ParamId = createParamDecorator((_data: unknown, context: ExecutionContext) => {

    return new ParseUUIDPipe(context.switchToHttp().getRequest().params.id)
})