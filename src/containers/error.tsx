import { Button } from 'components';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from 'components/ui/card/card';

import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

export function ErrorBoundray() {
  const error = useRouteError() as Error;

  return (
    <div
      id="error"
      className="flex items-center justify-center h-screen bg-gray-500/40"
    >
      {isRouteErrorResponse(error) ? (
        <p className="text-3xl font-bold">This page does not exist..</p>
      ) : (
        <Card className="space-y-6">
          <CardHeader>Ops..</CardHeader>
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">
              We are sorry... something went wrong
            </h2>
            <p className="text-lg mb-2">
              We cannot process your request at this moment.
            </p>
            {error && (
              <p className="text-red-500 text-sm mb-4">
                ERROR: {error.message}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button fullWidth variant="info">
              <Link to="/">Try again</Link>
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
