<div className='mt-4 md:mt-10'>
    <Form onFinish={onFinish} form={form}>
        <FormInput
            label='Email'
            placeholder='Email'
            name='email'
            type='email'
            rules={[{ required: true, message: "Please provide your Email" }]}
            className="border border-[#D9D9D9] w-full p-4 rounded bg-[#FF4E2508]"
        />
        <FormInput
            label='Password'
            placeholder='Password'
            name='password'
            type='password'
            rules={[{ required: true, message: "Please provide your Password" }]}
            className="border border-[#D9D9D9] w-full p-4 rounded bg-[#FF4E2508]"
        />
        <Checkbox className='description mt-6' onChange={e => setChecked(e.target.checked)}>Remember Me?</Checkbox>
        <div className='mt-3'><Link className='!text-primary description' href='/forgatpassword'>Forgot Password</Link></div>
        <button type='submit' className='auth-button font-poppins py-4'>Continue</button>
    </Form>
    <p className='mt-[29px] description !text-center'>New Here? <Link className='text-primary' href='/signup'>Please Sign In</Link></p>
</div>