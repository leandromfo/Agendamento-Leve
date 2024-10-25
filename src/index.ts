exports.handler = async function handler(_event: any, _context: any) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'My first lambda' })
    };
  };