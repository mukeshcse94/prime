import React from 'react';
import { Card, Button } from 'react-bootstrap';
import CardHeader from './home/post_card/CardHeader';
import CardBody from './home/post_card/CardBody';
import CardFooter from './home/post_card/CardFooter';

import Comments from './home/Comments';
import InputComment from './home/InputComment';

const PostCard = ({ post, theme }) => {
    return (
        <div className="card my-3">
            <Card>
                <CardHeader post={post} />
                <CardBody post={post} theme={theme} />
                <CardFooter post={post} />

                <Comments post={post} />
                <InputComment post={post} />
            </Card>
        </div>
    )
}

export default PostCard;
